import { notFound } from 'next/navigation';
import {
  getMDXContent,
  MDXContent as MDXContentType,
} from 'src/utils/mdx-utils';
import { MDXContent } from '../../../components/MDXContent';

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function DocumentationSlugPage({ params }: PageProps) {
  const doc = (await getMDXContent(
    'documentation',
    params.slug
  )) as MDXContentType;

  if (!doc) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <article className="py-12">
        <article className="prose prose-lg max-w-4xl mx-auto">
          <div className="mb-8">
            <h1>{doc.title}</h1>
            {doc.date && (
              <p className="text-gray-500">
                {new Date(doc.date).toLocaleDateString()}
              </p>
            )}
          </div>
          <MDXContent content={doc.content} />
        </article>
      </article>
    </div>
  );
}
