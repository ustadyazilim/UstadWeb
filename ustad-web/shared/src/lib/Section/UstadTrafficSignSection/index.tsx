/** Type Imports */
import type { Locale } from '../../../language/i18n-config';

/** Style Imports */
import styles from '../../../styles/UstadTrafficSignSection.module.scss';

/** Core Imports */
import Image from 'next/image';
import { getDictionary } from '../../../language/get-dictionary';

export interface UstadTrafficSignSectionProps {
  className?: string;
  params: { lang: Locale; theme: string };
}

const TRAFFIC_SIGNS = [
  { id: 1, variant: 'orange', src: '/images/traffic-signs/sign-1.svg' },
  { id: 2, variant: 'red', src: '/images/traffic-signs/sign-2.svg' },
  { id: 3, variant: 'green', src: '/images/traffic-signs/sign-3.svg' },
];

const UstadTrafficSignSection = async ({
  className,
  params,
}: UstadTrafficSignSectionProps) => {
  // Variables && Hooks
  const { lang } = params;
  const dictionary = await getDictionary(lang);

  return (
    <section className={`${styles['section']} ${className || ''}`}>
      <div className={styles['section__container']}>
        <div className={styles['section__signs']}>
          <div className={styles['signs__group']}>
            {TRAFFIC_SIGNS.map((sign) => (
              <div
                key={sign.id}
                className={`${styles['signs__item']} ${
                  styles[`signs__item--${sign.variant}`]
                }`}
              >
                <Image
                  src={sign.src}
                  alt="Traffic Sign"
                  width={135}
                  height={232}
                  className={styles['signs__image']}
                />
              </div>
            ))}
          </div>
        </div>

        <div className={styles['section__content']}>
          <h2 className={styles['section__title']}>
            {dictionary?.home?.trafficSignSection?.title}
          </h2>
          <p className={styles['section__description']}>
            {dictionary?.home?.trafficSignSection?.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default UstadTrafficSignSection;
