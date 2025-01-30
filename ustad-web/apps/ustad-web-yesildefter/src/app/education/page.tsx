import Link from 'next/link';
import { UstadCard } from '@shared/index';
import { getMDXContent, MDXContent } from '../../utils/mdx-utils';

export default async function EducationPage() {
  const lessons = (await getMDXContent('education')) as MDXContent[];

  return (
    <div className="min-h-screen bg-background">
      <article className="py-12">
        <h1 className="text-4xl font-bold mb-8">Education Center</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {!lessons || lessons.length === 0 ? (
            <p>No lessons found.</p>
          ) : (
            lessons.map((lesson) => (
              <Link
                key={lesson.slug}
                href={`/education/${lesson.slug}`}
                className="block"
              >
                <UstadCard className="h-full hover:shadow-lg transition-shadow">
                  <h2 className="text-xl font-semibold mb-2">{lesson.title}</h2>
                  {lesson.description && (
                    <p className="text-gray-600">{lesson.description}</p>
                  )}
                </UstadCard>
              </Link>
            ))
          )}
        </div>
      </article>
    </div>
  );
}
