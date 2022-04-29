import { combineReducers } from 'redux';
import { commonReducer } from './common';
import { productsReducer } from './products';

const reducers = {
  common: commonReducer,
  products: productsReducer
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
