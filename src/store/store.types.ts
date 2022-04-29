import { CommonState } from './modules/common/common.types';
import { ProductsState } from './modules/products/products.types';

export type AppState = {
  common: CommonState,
  products: ProductsState
}
