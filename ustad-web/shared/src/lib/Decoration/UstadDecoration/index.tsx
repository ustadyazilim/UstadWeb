'use client';
/** Core Imports */
import { useEffect, useRef } from 'react';
/** Style Imports */
import styles from '../../../styles/UstadDecorations.module.scss';
interface UstadDecorationsProps {
  variant?: 'default' | 'secondary';
}
const UstadDecorations = ({ variant = 'default' }: UstadDecorationsProps) => {
  const decorationsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const shapes = decorationsRef.current?.querySelectorAll(
      `.${styles['decorations__shape']}`
    );
    shapes?.forEach((shape, index) => {
      const rotation =
        variant === 'default'
          ? [-15, 10, 5, -8][index]
          : [-15, 10, 5, -8][index];

      (shape as HTMLElement).style.setProperty('--rotation', `${rotation}deg`);
      (shape as HTMLElement).style.setProperty('--delay', `${index * 0.5}s`);
    });
  }, [variant]);
  return (
    <div className={styles['decorations']} ref={decorationsRef}>
      {[...Array(4)].map((_, index) => (
        <img
          key={index}
          src={`/images/shapes/shape${index + 1}.svg`}
          alt=""
          className={`${styles['decorations__shape']} ${
            styles[`decorations__shape--${index + 1}`]
          }`}
        />
      ))}
    </div>
  );
};

export default UstadDecorations;
