import store from '@src/store';
import { GlobalStyle } from '@src/styles';
import { defaultTheme } from '@src/themes';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

const App = ({ Component, pageProps }: AppProps) => {

  return (
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
