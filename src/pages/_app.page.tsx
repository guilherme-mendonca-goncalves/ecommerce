import { DataHandler } from '@src/components';
import store from '@src/store';
import { Product } from '@src/store/modules/products/products.types';
import { GlobalStyle } from '@src/styles';
import { defaultTheme } from '@src/themes';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

const App = (appProps: AppProps) => {
  // API
  const products: Array<Product> = [
    {
      id: 0,
      name: 'Produto 1',
      description: 'Descrição produto 1',
      image: {
        alt: 'Imagem do produto 1',
        src: ''
      },
      price: 10,
      featured: true,
    },
    {
      id: 1,
      name: 'Produto 2',
      description: 'Descrição produto 2',
      image: {
        alt: 'Imagem do produto 2',
        src: ''
      },
      price: 20,
      featured: true,
    }
  ];

  appProps.pageProps['products'] = products;

  return (
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <DataHandler { ...appProps } />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
