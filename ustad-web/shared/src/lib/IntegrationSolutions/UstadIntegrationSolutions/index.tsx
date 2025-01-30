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
  comingSoon?: boolean;
}

export interface UstadIntegrationSolutionsProps {
  title?: string;
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
  },
  {
    title: 'Sanal Pos',
    image: '/images/solutions/sanal-pos.svg',
  },
  {
    title: 'SMS',
    image: '/images/solutions/sms.svg',
  },
  {
    title: 'Uzaktan Erisim',
    image: '/images/solutions/uzaktan-erisim.svg',
  },
  {
    title: 'Sinirsiz Kullanici',
    image: '/images/solutions/sinirsiz-kullanici.svg',
  },
  {
    title: 'Guvenli Yedekleme',
    image: '/images/solutions/guvenli-yedekleme.svg',
  },
];

const UstadIntegrationSolutions = ({
  title = 'Entegrasyon Çözümlerimiz',
  solutions = DEFAULT_SOLUTIONS,
  className,
}: UstadIntegrationSolutionsProps) => {
  return (
    <section className={`${styles['solutions']} ${className || ''}`}>
      <h2 className={styles['solutions__title']}>{title}</h2>

      <div className={styles['solutions__grid']}>
        {solutions.map((solution, index) => (
          <UstadCard key={index} className={styles['solution']}>
            <div className={styles['solution__content']}>
              <div className={styles['solution__image']}>
                <img src={solution.image} alt={solution.title} />
              </div>

              <div className={styles['solution__info']}>
                <h3 className={styles['solution__title']}>{solution.title}</h3>

                <UstadButton
                  variant="secondary"
                  className={styles['solution__button']}
                >
                  Dokümantasyonu Keşfedin
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
