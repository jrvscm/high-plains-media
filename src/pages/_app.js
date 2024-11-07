import '@/styles/reset.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@/styles/globals.css";
import { ThemeProvider } from 'styled-components';
import { HashProvider } from '../components/contexts/HashContext';
import { theme } from '../styles/theme';
import Layout from '../components/Layout';
import { LoadingProvider } from '../components/contexts/LoadingContext';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <LoadingProvider>
        <HashProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </HashProvider>
      </LoadingProvider>
    </ThemeProvider>
  );
}
