/** Type Imports */
import type { Locale } from '../../../language/i18n-config';

/** Style Imports */
import styles from '../../../styles/UstadTrafficSignSection.module.scss';

/** Core Imports */
import Image from 'next/image';
import { getDictionary } from '../../../language/get-dictionary';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faHandHoldingHeart,
  faShield,
  faUpload,
} from '@fortawesome/free-solid-svg-icons';

/** Props Interface */
export interface UstadTrafficSignSectionProps {
  className?: string;
  params: { lang: Locale; theme: string };
}

/** Constants */
const TRAFFIC_SIGNS = [
  { id: 1, variant: 'orange', src: '/images/traffic-signs/sign-1.svg' },
  { id: 2, variant: 'red', src: '/images/traffic-signs/sign-2.svg' },
  { id: 3, variant: 'green', src: '/images/traffic-signs/sign-3.svg' },
];
const DEFAULT_DESCRIPTIONS: TrafficSignDescription[] = [
  {
    text: 'YesilDefter, isletmelerin yönetim süreçlerini kolaylaştıran ve hızlandıran bir platform sunar.',
    icon: 'fa-hand-holding-heart',
    index: '1',
  },
  {
    text: 'Isletmenizi modernleştirin, musterilerinizin  ve personelinizin güvenini her zaman koruyun.',
    icon: 'fa-shield',
    index: '2',
  },
  {
    text: 'Teknolojik çözümlerle işlerinizi daha hızlı ve doğru yapın, aynı zamanda eskiye dayanan güvenilirlik ve profesyonellik anlayışından ödün vermeyin.',
    icon: 'fa-upload',
    index: '3',
  },
];

/** Helper Methods */
const getCorrectDescriptionText = (
  text: string,
  dictionary: any,
  index: number
) => {
  return dictionary?.home?.trafficSignSection?.descriptionTexts[index] || text;
};

const getCorrectDescriptionIcon = (
  icon: string,
  dictionary: any,
  index: number
) => {
  switch (
    dictionary?.home?.trafficSignSection?.descriptionIcons[index] ||
    icon
  ) {
    case 'fa-hand-holding-heart':
      return faHandHoldingHeart;
      break;
    case 'fa-shield':
      return faShield;
      break;
    case 'fa-upload':
      return faUpload;
      break;
  }
  return faShieldAlt;
};

const UstadTrafficSignSection = async ({
  descriptions = DEFAULT_DESCRIPTIONS,
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
          {descriptions.map((description) => (
            <div
              key={description?.index}
              className={styles['section__description']}
            >
              <div className={styles['section__description__icon']}>
                <FontAwesomeIcon
                  icon={getCorrectDescriptionIcon(
                    description?.icon,
                    dictionary,
                    description?.index
                  )}
                  className={`${styles['section__description__icon__']} signs__icon--${description?.index}`}
                />
              </div>
              <p className={styles['section__description__title']}>
                {getCorrectDescriptionText(
                  description?.text,
                  dictionary,
                  description?.index
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UstadTrafficSignSection;
