'use client';
import React, { useEffect, useRef } from 'react';
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

    const rotations = {
      memphics_016: 0,
      memphics_017: 0,
      memphics_014: 30,
    };

    shapes?.forEach((shape) => {
      const shapeName = shape.getAttribute('data-shape');
      const rotation = rotations[shapeName as keyof typeof rotations] || 0;
      (shape as HTMLElement).style.setProperty('--rotation', `${rotation}deg`);
    });
  }, []);

  return (
    <div className={styles['decorations']} ref={decorationsRef}>
      <div
        className={`${styles['decorations__shape']} ${styles['decorations__shape__016']}`}
        data-shape="memphics_016"
      >
        <img src="/images/shapes/shape1.svg" alt="Shape 1" />
      </div>

      <div
        className={`${styles['decorations__shape']} ${styles['decorations__shape__017']}`}
        data-shape="memphics_017"
      >
        <img src="/images/shapes/shape4.svg" alt="Shape 4" />
      </div>

      <div
        className={`${styles['decorations__shape']} ${styles['decorations__shape__014']}`}
        data-shape="memphics_014"
      >
        <img src="/images/shapes/shape3.svg" alt="Shape 3" />
      </div>
    </div>
  );
};

export default UstadDecorations;
