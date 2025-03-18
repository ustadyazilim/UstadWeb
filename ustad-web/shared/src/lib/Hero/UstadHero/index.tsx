'use client';

/** Core Imports */
import { Suspense } from 'react';
import Image from 'next/image';
import { getDictionary } from '../../../language/get-dictionary';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

/** Type Imports */
import type { Locale } from '../../../language/i18n-config';

/** Style Imports */
import styles from '../../../styles/UstadHero.module.scss';
import UstadButton from '../../Button/UstadButton';

/** Props Interface */
export interface UstadHeroProps {
  params: {
    lang: Locale;
    theme: string;
  };
}

const UstadHero = async ({ params }: UstadHeroProps) => {
  // Variables && Hooks
  const { lang } = params;
  const dictionary = await getDictionary(lang);
  return (
    <div className={styles['hero']}>
      <div className={styles['hero__container']}>
        <div className={styles['hero__content']}>
          <div className={styles['hero__header']}>
            <h5 className={styles['hero__header--label']}>
              {dictionary?.home?.hero?.subtitle}
            </h5>
            <div className={styles['hero__header--logo']}>
              <Image
                src={`/images/logos/logo-hero.png`}
                width={420}
                height={120}
                alt={`yesildefter Logo`}
                className={styles['logo-hero']}
              />
            </div>
          </div>
          <UstadButton
            variant="cta"
            className={styles['hero__cta']}
            size="large"
            icon={<FontAwesomeIcon icon={faPlay} />}
            iconPosition="right"
          >
            {dictionary?.home?.hero?.cta}
          </UstadButton>
        </div>
        <div className={styles['hero__image_wrapper']}>
          <Image
            src="/images/illustrations/hero-illustration.svg"
            width={50}
            height={50}
            alt="Hero illustration"
            className={styles['hero__image']}
          />
        </div>
      </div>
    </div>
  );
};

export default UstadHero;
