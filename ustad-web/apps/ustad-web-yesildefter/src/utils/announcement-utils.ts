import { AnnouncementMeta, AnnouncementFilters } from '../types/announcement';

export function calculateReadTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

export function isNewAnnouncement(date: string): boolean {
  const announcementDate = new Date(date);
  const now = new Date();
  const differenceInDays =
    (now.getTime() - announcementDate.getTime()) / (1000 * 3600 * 24);
  return differenceInDays <= 7; // Consider announcements within last 7 days as new
}

export function filterAnnouncements(
  announcements: AnnouncementMeta[],
  filters: AnnouncementFilters
): AnnouncementMeta[] {
  return announcements.filter((announcement) => {
    // Category filter
    if (filters.category && filters.category !== 'all') {
      if (announcement.category !== filters.category) return false;
    }

    // Priority filter
    if (filters.priority && filters.priority !== 'all') {
      if (announcement.priority !== filters.priority) return false;
    }

    // Search term
    if (filters.searchTerm) {
      const searchLower = filters.searchTerm.toLowerCase();
      const matchesSearch =
        announcement.title.toLowerCase().includes(searchLower) ||
        announcement.description?.toLowerCase().includes(searchLower) ||
        announcement.tags?.some((tag) =>
          tag.toLowerCase().includes(searchLower)
        );
      if (!matchesSearch) return false;
    }

    // Tags filter
    if (filters.tags && filters.tags.length > 0) {
      const hasMatchingTag = filters.tags.some((tag) =>
        announcement.tags?.includes(tag)
      );
      if (!hasMatchingTag) return false;
    }

    // Timeframe filter
    if (filters.timeframe) {
      const announcementDate = new Date(announcement.date);
      const now = new Date();
      const differenceInDays =
        (now.getTime() - announcementDate.getTime()) / (1000 * 3600 * 24);

      switch (filters.timeframe) {
        case 'recent':
          if (differenceInDays > 7) return false;
          break;
        case 'thisMonth':
          if (
            announcementDate.getMonth() !== now.getMonth() ||
            announcementDate.getFullYear() !== now.getFullYear()
          )
            return false;
          break;
        case 'archive':
          if (differenceInDays <= 30) return false;
          break;
      }
    }

    return true;
  });
}

export function sortAnnouncements(
  announcements: AnnouncementMeta[],
  sortBy: 'date' | 'priority'
): AnnouncementMeta[] {
  const priorityValues = { critical: 4, high: 3, medium: 2, low: 1 };

  return [...announcements].sort((a, b) => {
    if (sortBy === 'date') {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }

    // Sort by priority, then by date for same priority
    const priorityDiff =
      (priorityValues[b.priority || 'low'] || 0) -
      (priorityValues[a.priority || 'low'] || 0);

    if (priorityDiff === 0) {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }

    return priorityDiff;
  });
}

export function getRelatedAnnouncements(
  current: AnnouncementMeta,
  allAnnouncements: AnnouncementMeta[],
  limit = 3
): AnnouncementMeta[] {
  return allAnnouncements
    .filter(
      (announcement) =>
        announcement.slug !== current.slug &&
        (announcement.category === current.category ||
          announcement.tags?.some((tag) => current.tags?.includes(tag)))
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}
