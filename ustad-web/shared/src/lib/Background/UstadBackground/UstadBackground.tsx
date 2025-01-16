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
    />
  );
};

export default UstadBackground;
