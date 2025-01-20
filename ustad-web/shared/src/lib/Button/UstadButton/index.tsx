/** Core Imports */
import { PropsWithChildren, ReactNode } from 'react';
/** Style Imports */
import styles from '../../../styles/UstadButton.module.scss';
export type UstadButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'cta'
  | 'cta-nav'
  | 'text';
export type UstadButtonSize = 'small' | 'medium' | 'large';
export interface UstadButtonProps extends PropsWithChildren {
  variant?: UstadButtonVariant;
  size?: UstadButtonSize;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  isLoading?: boolean;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}
export const USTAD_BUTTON_TEST = {
  DEFAULT: 'ustad-button',
  ICON: 'ustad-button-icon',
  LOADING: 'ustad-button-loading',
} as const;
const UstadButton: React.FC<UstadButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  icon,
  iconPosition = 'left',
  isLoading,
  disabled,
  className,
  onClick,
  ...props
}) => {
  const classNames = [
    styles['button'],
    styles[`button--${variant}`],
    styles[`button--${size}`],
    isLoading && styles['button--loading'],
    disabled && styles['button--disabled'],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      className={classNames}
      onClick={onClick}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <span
          className={styles['button__spinner']}
          data-testid={USTAD_BUTTON_TEST.LOADING}
        />
      )}

      {icon && iconPosition === 'left' && (
        <span
          className={styles['button__icon']}
          data-testid={USTAD_BUTTON_TEST.ICON}
        >
          {icon}
        </span>
      )}

      {children}

      {icon && iconPosition === 'right' && (
        <span
          className={styles['button__icon']}
          data-testid={USTAD_BUTTON_TEST.ICON}
        >
          {icon}
        </span>
      )}
    </button>
  );
};

export default UstadButton;
