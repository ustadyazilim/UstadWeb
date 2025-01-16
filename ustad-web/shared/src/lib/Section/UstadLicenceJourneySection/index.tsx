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
      src: 'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0fe07db2-95f1-4ff7-afa1-e4312119e0cb/5a7d2c8e-bd70-4e43-9525-94488c82e7d6',
      alt: 'Sürücü Kursu Ana Görsel',
    },
    subFrames: [
      {
        frameId: 'frame159490',
        images: [
          { src: '/images/decorations/frame1.svg', alt: 'Dekoratif Görsel 1' },
          { src: '/images/decorations/frame2.svg', alt: 'Dekoratif Görsel 2' },
        ],
      },
    ],
  },
  {
    id: 'frame161027',
    mainImage: {
      src: 'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0fe07db2-95f1-4ff7-afa1-e4312119e0cb/15735af4-35ce-48fb-a16a-3ecc58d02e6a',
      alt: 'Sürücü Kursu Detay',
    },
    subFrames: [
      {
        frameId: 'frame159491',
        images: [
          { src: '/images/decorations/frame3.svg', alt: 'Dekoratif Görsel 3' },
          { src: '/images/decorations/frame4.svg', alt: 'Dekoratif Görsel 4' },
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
