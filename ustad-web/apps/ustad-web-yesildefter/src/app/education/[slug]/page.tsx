import { notFound } from 'next/navigation';
import { getMDXContent, ContentType } from '../../../utils/mdx-utils';
import { MDXRemote } from 'next-mdx-remote';
import { ContentTypeContent } from 'src/utils/types';

interface PageProps {
  params: {
    contentType: ContentType;
    slug: string;
  };
}

export default async function ContentTypeSlugPage({ params }: PageProps) {
  const contentType = params.contentType;
  const slug = params.slug;

  const content = (await getMDXContent(
    contentType,
    slug
  )) as ContentTypeContent;

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
            <div className="mt-4">
              {/* Disable delete and edit buttons for now */}
              {/* <button
                   onClick={handleDelete}
                   className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                 >
                   Delete
                 </button>
                 {session?.user && (
                   <a
                     href={`/api/${contentType}/${slug}/edit`}
                     className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                   >
                     Edit
                   </a>
                 )} */}
            </div>
          </div>
          <MDXRemote {...content.content} />
        </article>
      </article>
    </div>
  );
}
