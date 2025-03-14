export type AnnouncementPriority = 'low' | 'medium' | 'high' | 'critical';
export type AnnouncementCategory =
  | 'update'
  | 'feature'
  | 'maintenance'
  | 'important';

export interface AnnouncementMeta {
  title: string;
  description?: string;
  date: string;
  slug: string;
  category?: AnnouncementCategory;
  priority?: AnnouncementPriority;
  tags?: string[];
  author?: string;
  image?: string;
  isNew?: boolean;
  readTime?: number;
}

export interface AnnouncementFilters {
  category?: AnnouncementCategory | 'all';
  priority?: AnnouncementPriority | 'all';
  searchTerm?: string;
  tags?: string[];
  timeframe?: 'recent' | 'thisMonth' | 'archive';
}
