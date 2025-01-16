/** Type Imports */
import type { Locale } from '../../../language/i18n-config';

/** Style Imports */
import styles from '../../../styles/UstadHero.module.scss';

/** Core Imports */
import Image from 'next/image';
import Link from 'next/link';
import { getDictionary } from '../../../language/get-dictionary';

export interface UstadHeroProps {
  className?: string;
  params: { lang: Locale };
}

const AVATAR_GROUPS = [
  { id: 1, imageUrl: '/path/to/avatar1.jpg' },
  { id: 2, imageUrl: '/path/to/avatar2.jpg' },
  { id: 3, imageUrl: '/path/to/avatar3.jpg' },
  { id: 4, imageUrl: '/path/to/avatar4.jpg' },
];

const UstadHero = async ({ className, params }: UstadHeroProps) => {
  // Variables && Hooks
  const { lang } = params;
  const dictionary = await getDictionary(lang);

  return (
    <section className={`${styles['hero']} ${className || ''}`}>
      <div className={styles['hero__container']}>
        <div className={styles['hero__content']}>
          <div className={styles['hero__header']}>
            <span className={styles['hero__header--label']}>
              {dictionary?.home?.heroTitle}
            </span>
            <h1 className={styles['hero__header--title']}>
              {dictionary?.home?.welcome}
            </h1>
          </div>
          <Link href="/purchase" className={styles['hero__cta']}>
            {dictionary?.home?.ctaStart}
          </Link>
          <div className={styles['hero__users']}>
            <p className={styles['hero__users--text']}>
              {dictionary?.home?.heroSubtitle}
            </p>
            <div className={styles['hero__users--avatars']}>
              {AVATAR_GROUPS.map((avatar) => (
                <div key={avatar.id} className={styles['avatar-group']}>
                  <div
                    className={`${styles['avatar-group__circle']} ${styles['avatar-group__circle--red']}`}
                  />
                  <div
                    className={`${styles['avatar-group__circle']} ${styles['avatar-group__circle--orange']}`}
                  />
                  <Image
                    src={avatar.imageUrl}
                    alt={`User ${avatar.id}`}
                    width={40}
                    height={40}
                    className={styles['avatar-group__image']}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <Image
          src="/path/to/hero-image.jpg"
          alt="Big Shoes Avatar"
          width={505}
          height={390}
          className={styles['hero__image']}
        />
      </div>
    </section>
  );
};

export default UstadHero;
