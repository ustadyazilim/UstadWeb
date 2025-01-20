'use client';
/** Core Imports */
import { ReactNode, useState } from 'react';
/** Style Imports */
import styles from '../../../styles/UstadCard.module.scss';
/** Props Interface */
export interface UstadCardProps {
  variant?: 'default' | 'withTabs';
  tabs?: {
    label: string;
    content: ReactNode;
    isActive?: boolean;
  }[];
  children?: ReactNode;
  className?: string;
}
/** Test ID */
export const USTAD_CARD_TEST = {
  CONTAINER: 'ustad-card',
  TABS: 'ustad-card-tabs',
  TAB: 'ustad-card-tab',
  CONTENT: 'ustad-card-content',
};
const UstadCard = ({
  variant = 'default',
  tabs,
  children,
  className,
}: UstadCardProps) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div
      className={`${styles['card']} ${styles[`card--${variant}`]} ${
        className || ''
      }`}
      data-testid={USTAD_CARD_TEST.CONTAINER}
    >
      {variant === 'withTabs' && tabs && (
        <>
          <div
            className={styles['card__tabs']}
            data-testid={USTAD_CARD_TEST.TABS}
          >
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`${styles['tabs__item']} ${
                  activeTab === index ? styles['tabs__item--active'] : ''
                }`}
                onClick={() => setActiveTab(index)}
                data-testid={USTAD_CARD_TEST.TAB}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div
            className={styles['card__content']}
            data-testid={USTAD_CARD_TEST.CONTENT}
          >
            {tabs[activeTab].content}
          </div>
        </>
      )}
      {variant === 'default' && children}
    </div>
  );
};

export default UstadCard;
