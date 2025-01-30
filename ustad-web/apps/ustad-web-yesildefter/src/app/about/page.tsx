/** Core Imports */

/** Component Imports */
import { UstadCard } from '@shared/index';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <article className="py-12">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-xl text-gray-600">
            We are dedicated to revolutionizing the way people learn and prepare
            for their driver's license examinations.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <UstadCard>
            <h1> Innovation </h1>
            <p>
              {' '}
              We leverage cutting-edge technology to provide the best learning
              experience{' '}
            </p>
          </UstadCard>
          <UstadCard>
            <h1> Excellence </h1>
            <p>
              {' '}
              Our commitment to quality ensures the highest standards in
              education{' '}
            </p>
          </UstadCard>
          <UstadCard>
            <h1> Accessibility </h1>
            <p> Making quality education accessible to everyone, anywhere </p>
          </UstadCard>
        </div>
      </article>

      <article className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <UstadCard>
              <h1> Student Success </h1>
              <p>
                {' '}
                We prioritize our students' success through comprehensive
                support and guidance{' '}
              </p>
            </UstadCard>
            <UstadCard>
              <h1> Continuous Improvement </h1>
              <p>
                {' '}
                We constantly evolve and improve our platform based on feedback
                and new technologies{' '}
              </p>
            </UstadCard>
          </div>
        </div>
      </article>
    </div>
  );
}
