/** Style Imports */
import styles from '../../../styles/UstadDashboard.module.scss';

/** Component Imports */
import UstadButton from '../../Button/UstadButton';

/** Props Interface */
export interface UstadDashboardProps {
  className?: string;
}

/** Test ID */
export const USTAD_DASHBOARD_TEST = {
  CONTAINER: 'ustad-dashboard',
  HEADER: 'ustad-dashboard-header',
  SIDEBAR: 'ustad-dashboard-sidebar',
  MAIN: 'ustad-dashboard-main',
  METRICS: 'ustad-dashboard-metrics',
};

const METRICS_DATA = [
  { label: 'Click', value: '999.999', change: '+15%' },
  { label: 'Impression', value: '999.999', change: '+10%' },
  { label: 'CTR', value: '0.15%', change: '+5%' },
  { label: 'Conversion', value: '999.999', change: '+20%' },
];

const UstadDashboard = ({ className }: UstadDashboardProps) => {
  return (
    <div
      className={`${styles['dashboard']} ${className || ''}`}
      data-testid={USTAD_DASHBOARD_TEST.CONTAINER}
    >
      <div
        className={styles['dashboard__header']}
        data-testid={USTAD_DASHBOARD_TEST.HEADER}
      >
        <div className={styles['header__brand']}>
          <img src="/images/logo.svg" alt="Logo" />
          <div className={styles['header__balance']}>
            <span>Balance: $ 1500</span>
            <span>Coupon: $ 400</span>
          </div>
        </div>
        <div className={styles['header__user']}>
          <div className={styles['user__avatar']} />
          <div className={styles['user__info']}>
            <span className={styles['user__name']}>Gowit 1</span>
            <span className={styles['user__email']}>info@gowit.com</span>
          </div>
        </div>
      </div>
      <div className={styles['dashboard__content']}>
        <aside
          className={styles['dashboard__sidebar']}
          data-testid={USTAD_DASHBOARD_TEST.SIDEBAR}
        >
          <nav className={styles['sidebar__nav']}>
            {['campaigns', 'reports', 'invoices', 'guide'].map(
              (item, index) => (
                <button
                  key={item}
                  className={`${styles['nav__item']} ${
                    index === 0 ? styles['nav__item--active'] : ''
                  }`}
                >
                  <img src={`/images/icons/${item}.svg`} alt={item} />
                </button>
              )
            )}
          </nav>
        </aside>
        <main
          className={styles['dashboard__main']}
          data-testid={USTAD_DASHBOARD_TEST.MAIN}
        >
          <div
            className={styles['dashboard__metrics']}
            data-testid={USTAD_DASHBOARD_TEST.METRICS}
          >
            {METRICS_DATA.map((metric, index) => (
              <div key={index} className={styles['metrics__card']}>
                <div className={styles['metrics__header']}>
                  <span className={styles['metrics__label']}>
                    {metric.label}
                  </span>
                  <span className={styles['metrics__change']}>
                    {metric.change}
                  </span>
                </div>
                <div className={styles['metrics__value']}>{metric.value}</div>
                <div className={styles['metrics__footer']}>
                  <span>Last 30 Days</span>
                  <button>Show in Graph</button>
                </div>
              </div>
            ))}
          </div>
          <div className={styles['dashboard__controls']}>
            <div className={styles['controls__left']}>
              <UstadButton variant="primary">Add New Campaign</UstadButton>
              <div className={styles['controls__search']}>
                <img src="/images/icons/search.svg" alt="Search" />
                <input type="text" placeholder="Search in Campaign..." />
              </div>
            </div>
            <div className={styles['controls__right']}>
              <UstadButton variant="secondary">
                <img src="/images/icons/columns.svg" alt="Columns" />
                Columns
              </UstadButton>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default UstadDashboard;
