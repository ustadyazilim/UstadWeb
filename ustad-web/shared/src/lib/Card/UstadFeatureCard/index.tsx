/** Core Imports */
import { ReactNode } from 'react';

/** Style Imports */
import styles from '../../../styles/UstadFeatureCard.module.scss';

/** Props Interface */
export interface UstadFeatureCardProps {
  features?: {
    icon: ReactNode;
    title: string;
    description: string;
  }[];
  className?: string;
}

/** Test ID */
export const USTAD_FEATURE_TEST = {
  CONTAINER: 'ustad-feature',
  GRID: 'ustad-feature-grid',
  ITEM: 'ustad-feature-item',
};

const DEFAULT_FEATURES = [
  {
    icon: <img src="/images/icons/analytics.svg" alt="" />,
    title: 'Advanced Analytics',
    description:
      'Get detailed insights into your campaign performance with real-time analytics and reporting tools.',
  },
  {
    icon: <img src="/images/icons/automation.svg" alt="" />,
    title: 'Smart Automation',
    description:
      'Automate your campaign management with intelligent tools and optimization features.',
  },
  {
    icon: <img src="/images/icons/targeting.svg" alt="" />,
    title: 'Precise Targeting',
    description:
      'Reach your ideal audience with advanced targeting options and segmentation tools.',
  },
  {
    icon: <img src="/images/icons/integration.svg" alt="" />,
    title: 'Easy Integration',
    description:
      'Seamlessly integrate with your existing tools and platforms for streamlined workflow.',
  },
  {
    icon: <img src="/images/icons/support.svg" alt="" />,
    title: '24/7 Support',
    description:
      'Get expert help whenever you need it with our dedicated support team.',
  },
  {
    icon: <img src="/images/icons/security.svg" alt="" />,
    title: 'Enterprise Security',
    description:
      'Rest easy knowing your data is protected with enterprise-grade security measures.',
  },
];

const UstadFeatureCard = ({
  features = DEFAULT_FEATURES,
  className,
}: UstadFeatureCardProps) => {
  return (
    <div
      className={`${styles['feature-card']} ${className || ''}`}
      data-testid={USTAD_FEATURE_TEST.CONTAINER}
    >
      <div className={styles['feature-card__grid']}>
        {features.map((feature, index) => (
          <div
            key={index}
            className={styles['feature-card__item']}
            data-testid={USTAD_FEATURE_TEST.ITEM}
          >
            {feature.icon}
            <h4 className={styles['feature-card__title']}>{feature.title}</h4>
            <p className={styles['feature-card__description']}>
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UstadFeatureCard;
