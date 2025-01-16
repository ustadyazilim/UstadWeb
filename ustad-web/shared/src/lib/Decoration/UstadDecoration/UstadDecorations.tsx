'use client';

import { useEffect, useRef } from 'react';
import styles from '../../../styles/UstadDecorations.module.scss';
import UstadGeometricShape from '../UstadGeometricShape/GeometricShape';

interface UstadDecorationsProps {
  variant?: 'default' | 'cta';
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
        <UstadGeometricShape
          key={index}
          className={`${styles['decorations__shape']} ${
            styles[`decorations__shape--${index + 1}`]
          }`}
          color={index === 0 ? '#497F18' : index === 1 ? '#FF9914' : '#231B3B'}
        />
      ))}
    </div>
  );
};

export default UstadDecorations;
