import styles from '../../../styles/UstadBackground.module.scss';

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
        <img
          src="/images/shapes/shape1.svg"
          alt=""
          className={styles['background__shapes--1']}
          style={{ '--rotation': '-15deg' } as React.CSSProperties}
        />
        <img
          src="/images/shapes/shape2.svg"
          alt=""
          className={styles['background__shapes--2']}
          style={{ '--rotation': '10deg' } as React.CSSProperties}
        />
        <img
          src="/images/shapes/shape3.svg"
          alt=""
          className={styles['background__shapes--3']}
          style={{ '--rotation': '5deg' } as React.CSSProperties}
        />
        <img
          src="/images/shapes/shape4.svg"
          alt=""
          className={styles['background__shapes--4']}
          style={{ '--rotation': '-8deg' } as React.CSSProperties}
        />
      </div>
    </div>
  );
};

export default UstadBackground;
