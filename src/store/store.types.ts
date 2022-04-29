import { CartState } from './modules/cart/cart.types';
import { CommonState } from './modules/common/common.types';
import { ProductsState } from './modules/products/products.types';

export type AppState = {
  cart: CartState,
  common: CommonState,
  products: ProductsState
}
