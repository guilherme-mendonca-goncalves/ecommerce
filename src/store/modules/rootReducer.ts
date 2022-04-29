import { combineReducers } from 'redux';
import { cartReducer } from './cart';
import { commonReducer } from './common';
import { productsReducer } from './products';

const reducers = {
  cart: cartReducer,
  common: commonReducer,
  products: productsReducer
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
