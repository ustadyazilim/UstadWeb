'use client';

/** Type Imports */
import type { Locale } from '../../../language/i18n-config';

/** Core Imports */
import Link from 'next/link';
import { useState } from 'react';

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
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Documentation', href: '/documentation' },
  { label: 'Subscriptions', href: '/subscription' },
  { label: 'Announcements', href: '/announcements' },
  { label: 'Education', href: '/education' },
  { label: 'Buy Credit', href: '/buy-credit' },
  { label: 'ESinav', href: '/esinav' },
];

const UstadHeader = ({ className, params }: UstadHeaderProps) => {
  // TODO: Replace with actual auth state management
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogout = () => {
    setIsAuthenticated(false);
    // TODO: Add actual logout logic
  };

  return (
    <header className={`${styles['header']} ${className || ''}`}>
      <div className={styles['header__container']}>
        <Link href="/" className={styles['header__logo']}>
          yesiLdefter
        </Link>

        <nav className={styles['header__nav']}>
          {NAV_ITEMS.map((item, index) => (
            <Link key={index} href={item.href} className={styles['nav__item']}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className={styles['header__actions']}>
          {isAuthenticated ? (
            <>
              <div className={styles['avatar']}>
                <img src="/images/avatar.png" alt="Profile" />
              </div>
              <UstadButton
                variant="text"
                icon={
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 7L15.59 8.41L18.17 11H8V13H18.17L15.59 15.58L17 17L22 12L17 7ZM4 5H12V3H4C2.9 3 2 3.9 2 5V19C2 20.1 2.9 21 4 21H12V19H4V5Z"
                      fill="currentColor"
                    />
                  </svg>
                }
                iconPosition="right"
                onClick={handleLogout}
              >
                Exit
              </UstadButton>
            </>
          ) : (
            <Link href="/auth/login">
              <UstadButton variant="cta">Get Started</UstadButton>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default UstadHeader;
