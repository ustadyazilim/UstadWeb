/** Type Imports */
import type { Locale } from '../../../language/i18n-config';

/** Style Imports */
import styles from '../../../styles/UstadWhyYesildefter.module.scss';

/** Props Interface */
export interface UstadWhyYesildefterProps {
  className?: string;
  params: {
    lang: Locale;
    theme: string;
  };
}

/** Test ID */
export const USTAD_WHY_YESILDEFTER_TEST = {
  CONTAINER: 'ustad-why-yesildefter',
  CONTENT: 'ustad-why-yesildefter-content',
  TITLE: 'ustad-why-yesildefter-title',
  DESCRIPTION: 'ustad-why-yesildefter-description',
};

const UstadWhyYesildefter = ({ className }: UstadWhyYesildefterProps) => {
  return (
    <section
      className={`${styles['why']} ${className || ''}`}
      data-testid={USTAD_WHY_YESILDEFTER_TEST.CONTAINER}
    >
      <div
        className={styles['why__content']}
        data-testid={USTAD_WHY_YESILDEFTER_TEST.CONTENT}
      >
        <h2
          className={styles['why__title']}
          data-testid={USTAD_WHY_YESILDEFTER_TEST.TITLE}
        >
          Neden <span className={styles['why__highlight']}>yesiLdefter</span> ?
        </h2>
        <div
          className={styles['why__description']}
          data-testid={USTAD_WHY_YESILDEFTER_TEST.DESCRIPTION}
        >
          <p>İşletmenizi yönetmenin en kolay ve basit yolu.</p>
          <p>
            Artık işletmenizdeki işlerinizi hızlı, verimli ve her yerden
            yönetebilirsiniz.
          </p>
          <p>
            Güvenilir ve etkili çözümlerimizle süreci daha kolay hale getirin.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UstadWhyYesildefter;
