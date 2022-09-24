import { AppProps } from 'next/app';
import Head from 'next/head';

import AppProvider from 'hooks';
import { ThemeProvider } from 'styled-components';

import ErrorBoundary from 'components/ErrorBoundary';
import ErrorFallback from 'components/ErrorFallback';

import GlobalStyles from 'styles/global';
import theme from 'styles/theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>App Name</title>
        <link rel="shorcut icon" href="/img/bg.png" />
        <link rel="apple-touch-icon" href="/img/bg.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="App Name" />
      </Head>

      <AppProvider>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Component {...pageProps} />
        </ErrorBoundary>
      </AppProvider>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
