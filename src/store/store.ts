import { createStore } from 'redux';
import { rootReducer } from './modules';
import { composeWithDevTools } from 'redux-devtools-extension';

const isTest = process.env.NODE_ENV === 'development';

const composition = composeWithDevTools();

const store = isTest ? createStore(rootReducer, composition) : createStore(rootReducer);

export default store;
