/** Core Imports */
import { ReactNode } from 'react';
import Link from 'next/link';

/** Style Imports */
import styles from '../../../styles/UstadLink.module.scss';

/** Props Interface */
export interface UstadLinkProps {
  href?: string;
  icon?: 'Teknosa' | 'Koctas' | 'Appier' | 'Turkcell' | 'Modanisa';
  children?: ReactNode;
  className?: string;
  external?: boolean;
}

/** Test ID */
export const USTAD_LINK_TEST = {
  CONTAINER: 'ustad-link',
  ICON: 'ustad-link-icon',
};

const UstadLink = ({
  href = '#',
  icon,
  children,
  className,
  external = false,
  ...props
}: UstadLinkProps) => {
  const LinkComponent = external ? 'a' : Link;
  const linkProps = external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <LinkComponent
      href={href}
      className={`${styles['link']} ${className || ''}`}
      data-testid={USTAD_LINK_TEST.CONTAINER}
      {...linkProps}
      {...props}
    >
      {icon && (
        <div
          className={styles['link__icon']}
          data-testid={USTAD_LINK_TEST.ICON}
        >
          <img
            src={`/images/logos/${icon.toLowerCase()}.svg`}
            alt={`${icon} logo`}
            width={120}
            height={40}
          />
        </div>
      )}
      {children}
    </LinkComponent>
  );
};

export default UstadLink;
