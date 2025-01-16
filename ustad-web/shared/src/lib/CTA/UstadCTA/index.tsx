/** Core Imports */

/** Style Imports */
import styles from '../../../styles/UstadCTA.module.scss';

/** Component Imports */
import UstadButton from '../../Button/UstadButton';

/** Props Interface */
export interface UstadCTAProps {
  title?: string;
  buttonText?: string;
  className?: string;
}

/** Test ID */
export const USTAD_CTA_TEST = {
  CONTAINER: 'ustad-cta',
  CONTENT: 'ustad-cta-content',
  TITLE: 'ustad-cta-title',
  BUTTON: 'ustad-cta-button',
  DECORATIONS: 'ustad-cta-decorations',
};

const UstadCTA = ({
  title = 'Ready to build your new copilot together?',
  buttonText = 'Book a Demo →',
  className,
}: UstadCTAProps) => {
  return (
    <section
      className={`${styles['cta']} ${className || ''}`}
      data-testid={USTAD_CTA_TEST.CONTAINER}
    >
      <div
        className={styles['cta__content']}
        data-testid={USTAD_CTA_TEST.CONTENT}
      >
        <h2 className={styles['cta__title']} data-testid={USTAD_CTA_TEST.TITLE}>
          <span>{title}</span>
          <div className={styles['title__highlight']}>
            <span className={styles['title__highlight--text']}>Copilot</span>
            <div className={styles['title__highlight--decoration']}>
              <img src="/images/decorations/copilot-highlight.svg" alt="" />
            </div>
          </div>
          <span>together?</span>
        </h2>
        <UstadButton
          variant="primary"
          size="large"
          className={styles['cta__button']}
          data-testid={USTAD_CTA_TEST.BUTTON}
        >
          {buttonText}
        </UstadButton>
      </div>
      <div
        className={styles['cta__decorations']}
        data-testid={USTAD_CTA_TEST.DECORATIONS}
      >
        <div className={styles['decorations__item']}>
          <img src="/images/decorations/chart-1.svg" alt="" />
        </div>
        <div className={styles['decorations__item']}>
          <img src="/images/decorations/chart-2.svg" alt="" />
        </div>
        <div className={styles['decorations__item']}>
          <img src="/images/decorations/chart-3.svg" alt="" />
        </div>
        <div className={styles['decorations__item']}>
          <img src="/images/decorations/dots.svg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default UstadCTA;
