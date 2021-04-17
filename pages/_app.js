import { URLContext } from '../services/context';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <URLContext>
      <Component {...pageProps} />
    </URLContext>
  );
}

export default MyApp;
