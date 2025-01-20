/** Type Imports */
import type { Locale } from '../../../language/i18n-config';

/** Core Imports */
import { ReactNode } from 'react';

/** Style Imports */
import styles from '../../../styles/UstadRedefineProductivity.module.scss';

/** Component Imports */
import UstadButton from '../../Button/UstadButton';

/** Props Interface */
export interface UstadRedefineProductivityCardProps {
  params: {
    lang: Locale;
    theme: string;
  };
  features?: {
    icon?: ReactNode;
    title: string;
    description: string;
  }[];
  className?: string;
}

/** Test ID */
export const USTAD_REDEFINE_CARD_TEST = {
  CONTAINER: 'ustad-redefine-card',
  FEATURES: 'ustad-redefine-features',
  FEATURE: 'ustad-redefine-feature',
};

const defaultFeatures = [
  {
    title: 'Unified Dashboard',
    description: 'Manage all your business in one place',
  },
  {
    title: 'Real-time Analytics',
    description: 'Track performance and optimize the business instantly',
  },
  {
    title: 'Smart Automation',
    description: 'Automate company management and grow strategies',
  },
];

const UstadRedefineProductivityCard = ({
  features = defaultFeatures,
  className,
}: UstadRedefineProductivityCardProps) => {
  return (
    <div
      className={`${styles['redefine']} ${className || ''}`}
      data-testid={USTAD_REDEFINE_CARD_TEST.CONTAINER}
    >
      <div className={styles['redefine__content']}>
        <h3 className={styles['redefine__title']}>
          Redefine Your Business Strategy
        </h3>

        <div
          className={styles['redefine__features']}
          data-testid={USTAD_REDEFINE_CARD_TEST.FEATURES}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className={styles['feature']}
              data-testid={USTAD_REDEFINE_CARD_TEST.FEATURE}
            >
              {feature.icon && (
                <div className={styles['feature__icon']}>{feature.icon}</div>
              )}
              <h4 className={styles['feature__title']}>{feature.title}</h4>
              <p className={styles['feature__description']}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className={styles['redefine__action']}>
          <UstadButton variant="primary" size="large">
            Learn More
          </UstadButton>
        </div>
      </div>
    </div>
  );
};

export default UstadRedefineProductivityCard;
