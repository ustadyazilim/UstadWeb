'use client';

import styles from '../../../styles/UstadLayout.module.scss';
import { Suspense } from 'react';
import { UstadHeader } from '../../Header';
import { UstadFooter } from '../../Footer';
import { UstadDecorations } from '../../Decoration';

export interface UstadLayoutProps {
  children: React.ReactNode;
  params: {
    lang: string;
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
      <UstadFooter />
    </div>
  );
};

export default UstadLayout;
