// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import styles from './app.module.scss';

const Home = () => (
  <div class={styles['app']}>
    <h1>Ustad E-Sınav</h1>
    <div class={styles['exam-container']}>
      <p>Sınav başlatılıyor...</p>
      <button onClick={() => (window.location.hash = '#/esinav')}>
        Sınavlara Git
      </button>
    </div>
  </div>
);

const Exams = () => (
  <div class={styles['app']}>
    <h1>Sınavlar</h1>
    <div class={styles['exam-container']}>
      <p>Sınav listesi yükleniyor...</p>
      <button onClick={() => (window.location.hash = '#/')}>
        Ana Sayfaya Dön
      </button>
    </div>
  </div>
);

export function App() {
  const [currentRoute, setCurrentRoute] = useState(
    window.location.hash || '#/'
  );

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentRoute(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return currentRoute === '#/esinav' ? <Exams /> : <Home />;
}

export default App;
