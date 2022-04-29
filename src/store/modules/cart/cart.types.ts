import { Product } from '../products/products.types';

export enum CartActionTypes {
  ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART',
  REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART',
}

export type CartAction = {
  type: CartActionTypes,
  payload: {
    product?: Product
  }
}

export type CartState = Array<Product>;
