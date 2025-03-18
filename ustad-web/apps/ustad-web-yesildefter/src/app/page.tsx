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
  const lang = 'tr-TR';
  return (
    <>
      <UstadBackground animated variant={'figma'} />
      <main className="main-content" style={{ paddingTop: '160px' }}>
        <UstadHero params={{ lang: lang, theme: 'light' }} />
        <UstadTrafficSignSection params={{ lang: lang, theme: 'light' }} />
        <UstadIntegrationSolutions params={{ lang: lang, theme: 'light' }} />
        <UstadWhyYesildefter params={{ lang: lang, theme: 'light' }} />
      </main>
    </>
  );
}
