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
  // Variables && Hooks

  const lang = 'en-US';

  return (
    <>
      <UstadHero params={{ lang }} />
      <UstadTrafficSignSection params={{ lang }} />
      <UstadLicenceJourneySection
        params={{ lang }}
        images={
          [
            /* image data */
          ]
        }
      />
      <UstadTestimonialCard />
      <UstadCTA
        title="Ready to start your journey?"
        buttonText="Get Started - For Free"
      />
      <UstadFeatureCard />
    </>
  );
}
