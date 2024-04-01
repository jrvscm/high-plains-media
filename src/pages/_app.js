import '@/styles/reset.css';
import "@/styles/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

import Layout from '../components/Layout';
import { LoadingProvider } from '../components/contexts/LoadingContext';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <LoadingProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </LoadingProvider>
    </ThemeProvider>
  )
}