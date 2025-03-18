/** Core Imports */
import { getDictionary } from '../../../language/get-dictionary';

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

const UstadWhyYesildefter = async ({
  className,
  params,
}: UstadWhyYesildefterProps) => {
  const { lang } = params;
  const dictionary = await getDictionary(lang);

  const title = lang === 'en-us' ? 'Why' : 'Neden';

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
          {title} <span className={styles['why__highlight']}>yesiLdefter</span>{' '}
          ?
        </h2>
        <div
          className={styles['why__description']}
          data-testid={USTAD_WHY_YESILDEFTER_TEST.DESCRIPTION}
        >
          <h5>{dictionary?.home?.whyYesilDefter?.title}</h5>
          <h5> {dictionary?.home?.whyYesilDefter?.benefits} </h5>
        </div>
      </div>
    </section>
  );
};

export default UstadWhyYesildefter;
