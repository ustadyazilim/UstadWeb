import styles from './page.module.css';
import {
  UstadHeader,
  UstadFooter,
  UstadButton,
  UstadCTA,
  UstadCard,
  UstadFeatureCard,
  UstadTestimonialCard,
  UstadRedefineProductivityCard,
  UstadTrafficSignSection,
  UstadLicenceJourneySection,
} from '@shared/index';

export default function HomePage() {
  const params = { lang: 'en-US', theme: 'light' };

  return (
    <div className={styles.page}>
      <UstadHeader params={params} />
      <main className="wrapper container">
        <h1>Component Showcase</h1>
        <section>
          <UstadLicenceJourneySection images={[]} params={params} />
          <UstadTrafficSignSection params={params} />
        </section>

        <section>
          <h2>Buttons</h2>
          <UstadButton variant="primary">Primary Button</UstadButton>
          <UstadButton variant="secondary">Secondary Button</UstadButton>
        </section>

        <section>
          <h2>CTA</h2>
          <UstadCTA />
        </section>

        <section>
          <h2>Cards</h2>
          <UstadCard>
            <p>This is a UstadCard component</p>
          </UstadCard>
          <UstadFeatureCard params={params} />
          <UstadTestimonialCard params={params} />
          <UstadRedefineProductivityCard params={params} />
        </section>

        {/* Add more component sections as needed */}
      </main>

      <UstadFooter />
    </div>
  );
}
