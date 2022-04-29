import { productsActions } from '@src/store/modules/products';
import { AppProps } from 'next/app';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const DataHandler = ({ Component, pageProps }: AppProps) => {
  const { products } = pageProps;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productsActions.setProducts(products));
  }, [dispatch, products]);

  return (
    <Component {...pageProps} />
  );
};

export default DataHandler;
