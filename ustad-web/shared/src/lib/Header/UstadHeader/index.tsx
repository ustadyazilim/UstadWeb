'use client';

/** Type Imports */
import type { Locale } from '../../../language/i18n-config';

/** Core Imports */
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

/** Style Imports */
import styles from '../../../styles/UstadHeader.module.scss';

/** Component Imports */
import UstadButton from '../../Button/UstadButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

/** Props Interface */
export interface UstadHeaderProps {
  className?: string;
  params: {
    lang: Locale;
    theme: string;
  };
}

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Documentation', href: '/documentation' },
  { label: 'Purchase', href: '/subscription' },
];

const UstadHeader = ({ className, params }: UstadHeaderProps) => {
  // TODO: Replace with actual auth state management
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const handleLogout = () => {
    setIsAuthenticated(false);
    // TODO: Add actual logout logic
  };

  return (
    <header className={`${styles['header']} ${className || ''}`}>
      <div className={styles['header__container']}>
        <div className={styles['header__logo-wrapper']}>
          <Link href="/" className={styles['header__logo']}>
            <Image
              src="/images/logo-2x.png"
              alt="yeşiLdefter"
              width={214}
              height={52}
            />
          </Link>
        </div>

        <div className={styles['header__content']}>
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

            {isAuthenticated && (
              <div className={styles['nav__exit-button']}>
                <FontAwesomeIcon
                  icon={faSignOutAlt}
                  className={styles['exit-icon']}
                />
                <span>Exit</span>
              </div>
            )}

            {isAuthenticated && (
              <div className={styles['nav__user-icon']}>
                <FontAwesomeIcon
                  icon={faUser}
                  className={styles['user-icon']}
                />
                <span>Login</span>
              </div>
            )}
          </nav>

          {isAuthenticated && (
            <div className={styles['header__cta']}>
              <UstadButton variant="cta" className={styles['contact-button']}>
                Contact Us
              </UstadButton>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default UstadHeader;
