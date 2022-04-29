import { Product, ProductsActionTypes } from './products.types';

const setProducts = (products: Array<Product>) => {
  console.log('products', products);
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
