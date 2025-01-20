/** Type Imports */
import type { Locale } from '../../../language/i18n-config';

/** Core Imports */
import Link from 'next/link';

/** Style Imports */
import styles from '../../../styles/UstadHeader.module.scss';

/** Component Imports */
import UstadButton from '../../Button/UstadButton';

/** Props Interface */
export interface UstadHeaderProps {
  className?: string;
  params: {
    lang: Locale;
    theme: string;
  };
}

const NAV_ITEMS = [
  { label: 'Item 1', href: '/item-1' },
  { label: 'Item 2', href: '/item-2' },
  { label: 'Item 3', href: '/item-3' },
  { label: 'Item 4', href: '/item-4' },
  { label: 'Item 5', href: '/item-5' },
];

const UstadHeader = ({ className, params }: UstadHeaderProps) => {
  return (
    <header className={`${styles['header']} ${className || ''}`}>
      <div className={styles['header__container']}>
        <Link href="/" className={styles['header__logo']}>
          Logo
        </Link>

        <div className={styles['header__nav']}>
          <nav className={styles['header__nav']}>
            {NAV_ITEMS.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={styles['nav__item']}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className={styles['header__actions']}>
            <UstadButton variant="primary">Get Started - For Free</UstadButton>
          </div>
        </div>
      </div>
    </header>
  );
};

export default UstadHeader;
