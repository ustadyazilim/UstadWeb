import { notFound } from 'next/navigation';
import { getMDXContent } from '../../../utils/mdx-utils';
import { MDXContent } from '../../../components/MDXContent';
import type { MDXContent as MDXContentType } from '../../../utils/mdx-utils';

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function AnnouncementSlugPage({ params }: PageProps) {
  const content = (await getMDXContent(
    'announcements',
    params.slug
  )) as MDXContentType;

  if (!content) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <article className="py-12">
        <article className="prose prose-lg max-w-4xl mx-auto">
          <div className="mb-8">
            <h1>{content.title}</h1>
            {content.date && (
              <p className="text-gray-500">
                {new Date(content.date).toLocaleDateString()}
              </p>
            )}
          </div>
          <MDXContent content={content.content} />
        </article>
      </article>
    </div>
  );
}
