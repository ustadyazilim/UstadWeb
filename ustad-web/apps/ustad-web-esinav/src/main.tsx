import { render } from 'preact';
import App from './app/app';
import './styles.scss';

const root = document.getElementById('preact-exam-root');
if (root) {
  render(<App />, root);
}
