/** Core Imports */
import Image from 'next/image';
import Link from 'next/link';

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

const UstadHero = ({ params }: UstadHeroProps) => {
  return (
    <div className={styles['hero']}>
      <div className={styles['hero__container']}>
        <div className={styles['hero__content']}>
          <div className={styles['hero__header']}>
            <span className={styles['hero__header--label']}>
              It's Easy to Get Your Driver's License
            </span>
            <h1 className={styles['hero__header--title']}>yesiLdefter</h1>
          </div>

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
