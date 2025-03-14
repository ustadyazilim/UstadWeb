/** Core Imports */
import { getDictionary } from '../../../language/get-dictionary';

/** Type Imports */
import type { Locale } from '../../../language/i18n-config';

/** Style Imports */
import styles from '../../../styles/UstadIntegrationSolutions.module.scss';

/** Component Imports */
import UstadCard from '../../Card/UstadCard';
import UstadButton from '../../Button/UstadButton';

interface IntegrationSolution {
  title: string;
  image: string;
  description: string;
  comingSoon?: boolean;
}

/** Props Interface */
export interface UstadIntegrationSolutionsProps {
  solutions?: IntegrationSolution[];
  className?: string;
  params: {
    lang: Locale;
    theme: string;
  };
}

const DEFAULT_SOLUTIONS: IntegrationSolution[] = [
  {
    title: 'E Fatura',
    image: '/images/solutions/e-fatura.svg',
    description: 'E-Invoice',
  },
  {
    title: 'Sanal Pos',
    image: '/images/solutions/sanal-pos.svg',
    description: 'Virtual POS',
  },
  {
    title: 'SMS',
    image: '/images/solutions/sms.svg',
    description: 'SMS Notifications',
  },
  {
    title: 'Uzaktan Erisim',
    image: '/images/solutions/uzaktan-erisim.svg',
    description: 'Remote Access',
  },
  {
    title: 'Sinirsiz Kullanici',
    image: '/images/solutions/sinirsiz-kullanici.svg',
    description: 'Unlimited Users',
  },
  {
    title: 'Guvenli Yedekleme',
    image: '/images/solutions/guvenli-yedekleme.svg',
    description: 'Secure Backup',
  },
];

/** Helper Methods */
const getCorrectSolutionTitle = (
  title: string,
  dictionary: any,
  index: number
) => {
  return dictionary?.home?.integrationSolutions[index] || title;
};

const getCorrectSolutionDescription = (
  description: string,
  dictionary: any,
  index: number
) => {
  return dictionary?.home?.integrationSolutions[index + 5] || description;
};

const UstadIntegrationSolutions = async ({
  solutions = DEFAULT_SOLUTIONS,
  className,
  params,
}: UstadIntegrationSolutionsProps) => {
  const { lang } = params;
  const dictionary = await getDictionary(lang);
  return (
    <section className={`${styles['solutions']} ${className || ''}`}>
      <h2 className={styles['solutions__title']}>
        {dictionary?.home?.integrationTitle}
      </h2>
      <div className={styles['solutions__grid']}>
        {solutions.map((solution, index) => (
          <UstadCard key={index} className={styles['solution']}>
            <div className={styles['solution__content']}>
              <div className={styles['solution__image']}>
                <img src={solution.image} alt={solution.title} />
              </div>
              <div className={styles['solution__info']}>
                <h3 className={styles['solution__title']}>
                  {getCorrectSolutionTitle(solution.title, dictionary, index)}
                </h3>
                <p className={styles['solution__description']}>
                  {getCorrectSolutionDescription(
                    solution.description,
                    dictionary,
                    index
                  )}
                </p>
                <UstadButton
                  variant="secondary"
                  className={styles['solution__button']}
                >
                  {dictionary?.home?.integrationCta}
                </UstadButton>
                {solution.comingSoon && (
                  <p className={styles['solution__coming_soon']}>
                    Yakında daha fazla çözümler ile.
                  </p>
                )}
              </div>
            </div>
          </UstadCard>
        ))}
      </div>
    </section>
  );
};

export default UstadIntegrationSolutions;
