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
} from '@shared/index';

export default function HomePage() {
  return (
    <div className={styles.page}>
      <UstadHeader />

      <main className="wrapper container">
        <h1>Component Showcase</h1>

        <section>
          <h2>Buttons</h2>
          <UstadButton variant="primary">Primary Button</UstadButton>
          <UstadButton variant="secondary">Secondary Button</UstadButton>
          {/* Add more buttons as needed */}
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
          <UstadFeatureCard />
          <UstadTestimonialCard />
          <UstadRedefineProductivityCard />
          {/* Add more card variants as needed */}
        </section>

        {/* Add more component sections as needed */}
      </main>

      <UstadFooter />
    </div>
  );
}
