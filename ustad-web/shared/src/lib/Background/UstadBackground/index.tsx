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
          className={styles['background__shape--1']}
          color="#29590F"
          rotation={-15}
        />
        <UstadGeometricShape
          className={styles['background__shape--2']}
          color="#FF9914"
          rotation={10}
        />
        <UstadGeometricShape
          className={styles['background__shape--3']}
          color="#231B3B"
          rotation={5}
        />
      </div>
    </div>
  );
};

export default UstadBackground;
