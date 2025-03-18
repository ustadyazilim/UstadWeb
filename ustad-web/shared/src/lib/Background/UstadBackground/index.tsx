/** Core Imports */
import { UstadGeometricShape } from '../../Decoration';
/** Style Imports */
import styles from '../../../styles/UstadBackground.module.scss';
/** Props Interface */
export interface UstadBackgroundProps {
  animated?: boolean;
  variant?: 'default' | 'figma';
}

const UstadBackground = ({
  animated = false,
  variant = 'default',
}: UstadBackgroundProps) => {
  if (variant === 'figma') {
    return (
      <div
        className={`${styles['background']} ${
          animated ? styles['background--animated'] : ''
        } ${styles['background--figma']}`}
      >
        <div className={styles['background__shapes']}>
          <UstadGeometricShape
            className={`${styles['background__shape']} ${styles['background__shape--green']}`}
            src="/images/shapes/green-blob.svg"
          />
          <UstadGeometricShape
            className={`${styles['background__shape']} ${styles['background__shape--orange']}`}
            src="/images/shapes/orange-blob.svg"
          />
          <UstadGeometricShape
            className={`${styles['background__shape']} ${styles['background__shape--purple']}`}
            src="/images/shapes/purple-circle.svg"
          />
          <UstadGeometricShape
            className={`${styles['background__shape']} ${styles['background__shape--blue']}`}
            src="/images/shapes/blue-circle.svg"
          />
          <UstadGeometricShape
            className={`${styles['background__shape']} ${styles['background__shape--beige']}`}
            src="/images/shapes/beige-circle.svg"
          />
          <UstadGeometricShape
            className={`${styles['background__shape']} ${styles['background__shape--red']}`}
            src="/images/shapes/red-blob.svg"
          />
        </div>
      </div>
    );
  }

  return (
    <div
      className={`${styles['background']} ${
        animated ? styles['background--animated'] : ''
      }`}
    >
      <div className={styles['background__shapes']}>
        <UstadGeometricShape
          className={`${styles['background__shapes--1']} ${styles['background__shape']}`}
          src="/images/shapes/shape1.svg"
        />
        <UstadGeometricShape
          className={`${styles['background__shapes--2']} ${styles['background__shape']}`}
          src="/images/shapes/shape2.svg"
        />
        <UstadGeometricShape
          className={`${styles['background__shapes--3']} ${styles['background__shape']}`}
          src="/images/shapes/shape3.svg"
        />
      </div>
    </div>
  );
};

export default UstadBackground;
