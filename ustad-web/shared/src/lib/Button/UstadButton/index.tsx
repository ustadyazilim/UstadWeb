import React from 'react';
import styles from '../../../styles/UstadButton.module.scss';

export type UstadButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'cta'
  | 'cta-nav'
  | 'text';

export type UstadButtonSize = 'small' | 'medium' | 'large';

export interface UstadButtonProps {
  type?: 'button' | 'submit' | 'reset';
  variant?: UstadButtonVariant;
  size?: UstadButtonSize;
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
  isLoading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  disabled?: boolean; // Add this line
}

const UstadButton: React.FC<UstadButtonProps> = ({
  type = 'button',
  variant = 'primary',
  size = 'medium',
  onClick,
  children,
  className,
  isLoading = false,
  icon,
  iconPosition = 'left',
  disabled = false, // Add this line
}) => {
  return (
    <button
      type={type}
      className={`${styles['button']} ${styles[`button--${variant}`]} ${
        styles[`button--${size}`]
      } ${className || ''}`}
      onClick={onClick}
      disabled={isLoading || disabled} // Update this line
    >
      {iconPosition === 'left' && icon}
      {isLoading ? 'Loading...' : children}
      {iconPosition === 'right' && icon}
    </button>
  );
};

export default UstadButton;
