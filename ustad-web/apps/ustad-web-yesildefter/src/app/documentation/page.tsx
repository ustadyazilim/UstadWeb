/** Core Imports */
import Link from 'next/link';
import { getMDXContent, MDXContent } from '../../utils/mdx-utils';

/** NOTE(@Janberk):
 * Documentations Page
 * */
export default async function DocumentationPage() {
  const docs = (await getMDXContent('documentation')) as MDXContent[];

  return (
    <div className="min-h-screen bg-background">
      <article className="py-12">
        <h1 className="text-4xl font-bold mb-8">Documentation</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {!docs || docs.length === 0 ? (
            <p>No documentation found.</p>
          ) : (
            docs.map((doc) => (
              <Link
                key={doc.slug}
                href={`/documentation/${doc.slug}`}
                className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h2 className="text-xl font-semibold mb-2">{doc.title}</h2>
                {doc.description && (
                  <p className="text-gray-600">{doc.description}</p>
                )}
              </Link>
            ))
          )}
        </div>
      </article>
    </div>
  );
}
