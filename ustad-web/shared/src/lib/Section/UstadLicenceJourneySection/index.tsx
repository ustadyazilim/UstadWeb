/** Type Imports */
import { getDictionary } from '../../../language/get-dictionary';
import type { Locale } from '../../../language/i18n-config';
/** Style Imports */
import styles from '../../../styles/UstadLicenceJourney.module.scss';

/** Component Import */
import UstadCard from '../../Card/UstadCard';

/** Props Interface */
export interface UstadLicenceJourneySectionProps {
  images: {
    src: string;
    alt: string;
  }[];
  params: {
    lang: Locale;
    theme: string;
  };
}

/** Test Id */
export const USTAD_LICENSE_JOURNEY_TEST = {
  CONTAINER: 'ustad-license-journey',
  GRID: 'ustad-license-journey-grid',
  TEXT: 'ustad-license-journey-text',
};

const JOURNEY_FRAMES = [
  {
    id: 'frame160930',
    mainImage: {
      src: '/images/illustrations/testimonialCard-illustration.svg',
      alt: 'Sürücü Kursu Ana Görsel',
    },
    subFrames: [
      {
        frameId: 'frame159490',
        images: [
          {
            src: '/images/illustrations/testimonialCard-illustration.svg',
            alt: 'Dekoratif Görsel 1',
          },
          {
            src: '/images/illustrations/testimonialCard-illustration.svg',
            alt: 'Dekoratif Görsel 2',
          },
        ],
      },
    ],
  },
  {
    id: 'frame161027',
    mainImage: {
      src: '/images/illustrations/testimonialCard-illustration.svg',
      alt: 'Sürücü Kursu Detay',
    },
    subFrames: [
      {
        frameId: 'frame159491',
        images: [
          {
            src: '/images/illustrations/testimonialCard-illustration.svg',
            alt: 'Dekoratif Görsel 3',
          },
          {
            src: '/images/illustrations/testimonialCard-illustration.svg',
            alt: 'Dekoratif Görsel 4',
          },
        ],
      },
    ],
  },
];

const UstadLicenceJourneySection = async ({
  images,
  params,
}: UstadLicenceJourneySectionProps) => {
  // Variables && Hooks
  const { lang } = params;
  const dictionary = await getDictionary(lang);

  return (
    <UstadCard className={styles['journey']}>
      <div className={styles['journey__content']}>
        <div className={styles['journey__frames']}>
          {JOURNEY_FRAMES.map((frame) => (
            <div
              key={frame.id}
              className={`${styles['frame']} ${styles[frame.id]}`}
            >
              <div className={styles['frame__main']}>
                <img src={frame.mainImage.src} alt={frame.mainImage.alt} />
              </div>
              {frame.subFrames.map((subFrame) => (
                <div
                  key={subFrame.frameId}
                  className={styles[subFrame.frameId]}
                >
                  {subFrame.images.map((image, index) => (
                    <div key={index} className={styles['subframe__image']}>
                      <img src={image.src} alt={image.alt} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className={styles['journey__text']}>
          <h2 className={styles['text__title']}>
            {dictionary?.home?.licenceJourneySection?.title}
          </h2>
          <p className={styles['text__description']}>
            {dictionary?.home?.licenceJourneySection?.description}
          </p>
        </div>
      </div>
    </UstadCard>
  );
};

export default UstadLicenceJourneySection;
