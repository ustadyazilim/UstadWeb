/** Core Imports */
import { UstadGeometricShape } from '../../Decoration';
/** Style Imports */
import styles from '../../../styles/UstadBackground.module.scss';
/** Props Interface */
export interface UstadBackgroundProps {
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
          color="#295E00"
          rotation={-37.5}
          blur="true"
        />
        <UstadGeometricShape
          className={styles['background__shape--2']}
          color="#FF9914"
          rotation={45}
          blur="true"
        />
        <UstadGeometricShape
          className={styles['background__shape--3']}
          color="#F31B3F"
          rotation={15.5}
          blur="true"
        />
      </div>
    </div>
  );
};

export default UstadBackground;
