import { Product } from '../products/products.types';
import { CartActionTypes } from './cart.types';

const addProduct = (product: Product) => {
  return {
    type: CartActionTypes.ADD_PRODUCT_TO_CART,
    payload: {
      product
    }
  };
};

const removeProduct = (product: Product) => {
  return {
    type: CartActionTypes.REMOVE_PRODUCT_FROM_CART,
    payload: {
      product
    }
  };
};

const productActions = {
  addProduct,
  removeProduct
};

export default productActions;
