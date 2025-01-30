/** Component Imports */
import React from 'react';
import {
  UstadHero,
  UstadBackground,
  UstadTrafficSignSection,
  UstadIntegrationSolutions,
  UstadWhyYesildefter,
} from '@shared/index';

/** NOTE(@Janberk): Home page */
export default async function Page() {
  return (
    <>
      <UstadBackground animated />
      <main className="main-content" style={{ paddingTop: '160px' }}>
        <UstadHero params={{ lang: 'en-US', theme: 'light' }} />
        <UstadTrafficSignSection params={{ lang: 'en-US', theme: 'light' }} />
        <UstadIntegrationSolutions params={{ lang: 'en-US', theme: 'light' }} />
        <UstadWhyYesildefter params={{ lang: 'en-US', theme: 'light' }} />
      </main>
    </>
  );
}
