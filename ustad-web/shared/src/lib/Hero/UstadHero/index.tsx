'use client';

/** Core Imports */
import { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getDictionary } from '../../../language/get-dictionary';
import dynamic from 'next/dynamic';

/** Type Imports */
import type { Locale } from '../../../language/i18n-config';

/** Style Imports */
import styles from '../../../styles/UstadHero.module.scss';
import UstadButton from '../../Button/UstadButton';

export interface UstadHeroProps {
  params: {
    lang: Locale;
    theme: string;
  };
}

// Dynamically import the ThreeScene component with no SSR
const ThreeScene = dynamic(
  () => import('./ThreeScene').then((mod) => mod.default),
  {
    ssr: false,
    loading: () => (
      <div className={styles['hero__header']}>
        <span className={styles['hero__header--label']}>
          It's Easy to Get Your Driver's License
        </span>
        <h1 className={styles['hero__header--title']}>yesiLdefter</h1>
      </div>
    ),
  }
);

const UstadHero = ({ params }: UstadHeroProps) => {
  const { lang } = params;

  return (
    <div className={styles['hero']}>
      <div className={styles['hero__container']}>
        <div className={styles['hero__content']}>
          <UstadButton variant="cta" className={styles['hero__cta']}>
            Get started & Join the trusted community of Driver Schools
          </UstadButton>

          <div className={styles['hero__users']}>
            <p className={styles['hero__users--text']}>
              Join thousands of successful drivers who got their license through
              our platform
            </p>
            <div className={styles['hero__users--avatars']}>
              {[1, 2, 3, 4].map((index) => (
                <div key={index} className={styles['avatar-group']}>
                  <div
                    className={`${styles['avatar-group__circle']} ${styles['avatar-group__circle--red']}`}
                  />
                  <div
                    className={`${styles['avatar-group__circle']} ${styles['avatar-group__circle--orange']}`}
                  />
                  <img
                    src={`/images/avatars/avatar${index}.png`}
                    alt={`User ${index}`}
                    className={styles['avatar-group__image']}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles['hero__image_wrapper']}>
          <img
            src="/images/illustrations/hero-illustration.svg"
            alt="Hero illustration"
            className={styles['hero__image']}
          />
        </div>
      </div>
    </div>
  );
};

export default UstadHero;
