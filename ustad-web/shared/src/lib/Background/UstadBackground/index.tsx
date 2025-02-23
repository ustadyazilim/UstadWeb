import styles from '../../../styles/UstadBackground.module.scss';
import { UstadGeometricShape } from '../../Decoration';

interface UstadBackgroundProps {
  animated?: boolean;
}

const UstadBackground = ({ animated = false }: UstadBackgroundProps) => {
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
