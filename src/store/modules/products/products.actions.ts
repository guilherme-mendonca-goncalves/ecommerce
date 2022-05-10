import { Product, ProductsActionTypes } from './products.types';

const setProducts = (products: Array<Product>) => {
  return {
    type: ProductsActionTypes.SET_PRODUCTS,
    payload: {
      products
    }
  };
};

const productActions = {
  setProducts
};

export default productActions;
