'use client';

/** Type Imports */
import type { Locale } from '../../../language/i18n-config';

/** Style Imports */
import styles from '../../../styles/UstadLayout.module.scss';

/** Core Imports */
import { Suspense } from 'react';

/** Component Imports */
import { UstadHeader } from '../../Header';
import { UstadFooter } from '../../Footer';
import { UstadDecorations } from '../../Decoration';

export interface UstadLayoutProps {
  children: React.ReactNode;
  params: {
    lang: Locale;
    theme: string;
  };
}

const UstadLayout = ({ children, params }: UstadLayoutProps) => {
  return (
    <div className={styles['layout']}>
      <Suspense fallback={<div>Loading...</div>}>
        <UstadHeader params={params} />
      </Suspense>
      <main className={styles['layout__main']}>
        <UstadDecorations />

        {children}
      </main>
      <UstadFooter params={params} />
    </div>
  );
};

export default UstadLayout;
