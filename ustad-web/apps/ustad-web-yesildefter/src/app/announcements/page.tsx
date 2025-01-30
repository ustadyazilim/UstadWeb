import Link from 'next/link';
import { getMDXContent, MDXContent } from '../../utils/mdx-utils';

export default async function AnnouncementsPage() {
  const announcements = (await getMDXContent('announcements')) as MDXContent[];

  return (
    <div className="min-h-screen bg-background">
      <article className="py-12">
        <h1 className="text-4xl font-bold mb-8">Announcements</h1>
        <div className="max-w-4xl mx-auto space-y-6">
          {!announcements || announcements.length === 0 ? (
            <p>No announcements found.</p>
          ) : (
            announcements.map((announcement) => (
              <Link
                key={announcement.slug}
                href={`/announcements/${announcement.slug}`}
                className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-xl font-semibold mb-2">
                      {announcement.title}
                    </h2>
                    {announcement.description && (
                      <p className="text-gray-600">
                        {announcement.description}
                      </p>
                    )}
                  </div>
                  {announcement.date && (
                    <span className="text-sm text-gray-500">
                      {new Date(announcement.date).toLocaleDateString()}
                    </span>
                  )}
                </div>
              </Link>
            ))
          )}
        </div>
      </article>
    </div>
  );
}
