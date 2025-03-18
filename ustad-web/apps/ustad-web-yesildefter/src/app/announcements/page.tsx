'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  FiSearch,
  FiClock,
  FiTag,
  FiAlertCircle,
  FiFilter,
} from 'react-icons/fi';
import { getMDXContent } from '../../utils/mdx-utils';
import { UstadCard } from '@shared/index';
import {
  AnnouncementMeta,
  AnnouncementFilters,
  AnnouncementPriority,
  AnnouncementCategory,
} from '../../types/announcement';
import {
  filterAnnouncements,
  sortAnnouncements,
  isNewAnnouncement,
} from '../../utils/announcement-utils';

export default function AnnouncementsPage() {
  const [announcements, setAnnouncements] = useState<AnnouncementMeta[]>([]);
  const [filters, setFilters] = useState<AnnouncementFilters>({
    category: 'all',
    priority: 'all',
    timeframe: 'recent',
    searchTerm: '',
    tags: [],
  });
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState<'date' | 'priority'>('date');

  useEffect(() => {
    const fetchAnnouncements = async () => {
      const data = await getMDXContent('announcements');
      const processedData = (Array.isArray(data) ? data : []).map((item) => ({
        ...item,
        date: item.date || new Date().toISOString(),
      })) as AnnouncementMeta[];
      setAnnouncements(processedData);
      setIsLoading(false);
    };
    fetchAnnouncements();
  }, []);

  const filteredAndSortedAnnouncements = sortAnnouncements(
    filterAnnouncements(announcements, filters),
    sortBy
  );

  const handleFilterChange = (key: keyof AnnouncementFilters, value: any) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const PriorityBadge = ({ priority }: { priority?: AnnouncementPriority }) => {
    const colors = {
      critical: 'bg-red-100 text-red-800',
      high: 'bg-orange-100 text-orange-800',
      medium: 'bg-yellow-100 text-yellow-800',
      low: 'bg-green-100 text-green-800',
    };

    return priority ? (
      <span
        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colors[priority]}`}
      >
        {priority.charAt(0).toUpperCase() + priority.slice(1)}
      </span>
    ) : null;
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-to-b from-green-50 to-transparent py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-2">Announcements</h1>
              <p className="text-gray-600">
                Stay updated with the latest news and changes
              </p>
            </div>
            <button
              onClick={() =>
                setSortBy((prev) => (prev === 'date' ? 'priority' : 'date'))
              }
              className="flex items-center gap-2 px-4 py-2 bg-white rounded-md shadow-sm hover:shadow-md transition-all"
            >
              <FiFilter />
              Sort by {sortBy === 'date' ? 'Priority' : 'Date'}
            </button>
          </div>

          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="relative flex-grow">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search announcements..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                value={filters.searchTerm}
                onChange={(e) =>
                  handleFilterChange('searchTerm', e.target.value)
                }
              />
            </div>

            <select
              value={filters.category}
              onChange={(e) => handleFilterChange('category', e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="all">All Categories</option>
              <option value="update">Updates</option>
              <option value="feature">Features</option>
              <option value="maintenance">Maintenance</option>
              <option value="important">Important</option>
            </select>

            <select
              value={filters.timeframe}
              onChange={(e) => handleFilterChange('timeframe', e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="recent">Recent</option>
              <option value="thisMonth">This Month</option>
              <option value="archive">Archive</option>
            </select>
          </div>

          {isLoading ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin h-8 w-8 border-4 border-green-500 border-t-transparent rounded-full" />
            </div>
          ) : (
            <div className="grid gap-6">
              {filteredAndSortedAnnouncements.map((announcement) => (
                <Link
                  key={announcement.slug}
                  href={`/announcements/${announcement.slug}`}
                  className="block"
                >
                  <UstadCard className="hover:shadow-lg transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="flex-grow">
                        <div className="flex items-center gap-2 mb-2">
                          <PriorityBadge priority={announcement.priority} />
                          {isNewAnnouncement(announcement.date) && (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              New
                            </span>
                          )}
                          {announcement.category && (
                            <span className="text-sm font-medium text-gray-500">
                              {announcement.category}
                            </span>
                          )}
                        </div>

                        <h2 className="text-xl font-semibold mb-2">
                          {announcement.title}
                        </h2>

                        {announcement.description && (
                          <p className="text-gray-600 line-clamp-2">
                            {announcement.description}
                          </p>
                        )}

                        <div className="flex items-center gap-4 mt-3">
                          <span className="flex items-center text-sm text-gray-500">
                            <FiClock className="mr-1" />
                            {new Date(announcement.date).toLocaleDateString(
                              'en-US',
                              {
                                day: 'numeric',
                                month: 'short',
                                year: 'numeric',
                              }
                            )}
                          </span>
                          {announcement.tags &&
                            announcement.tags.length > 0 && (
                              <span className="flex items-center text-sm text-gray-500">
                                <FiTag className="mr-1" />
                                {announcement.tags.join(', ')}
                              </span>
                            )}
                        </div>
                      </div>
                    </div>
                  </UstadCard>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
