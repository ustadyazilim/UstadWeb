/** Component Imports */
import {
  UstadHero,
  UstadTrafficSignSection,
  UstadLicenceJourneySection,
  UstadTestimonialCard,
  UstadCTA,
  UstadFeatureCard,
} from '@shared/index';

export default async function Page() {
  return (
    <>
      <UstadHero params={{ lang: 'en-US', theme: 'light' }} />
      <UstadTrafficSignSection params={{ lang: 'en-US', theme: 'light' }} />
      <UstadLicenceJourneySection
        params={{ lang: 'en-US', theme: 'light' }}
        images={[]}
      />
      <UstadTestimonialCard params={{ lang: 'en-US', theme: 'light' }} />
      <UstadCTA
        title="Ready to start your journey?"
        buttonText="Get Started - For Free"
      />
      <UstadFeatureCard />
    </>
  );
}
