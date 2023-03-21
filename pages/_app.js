import Layout from '../components/layout';
import '../styles/globals.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import theme from '../styles/theme';
export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
