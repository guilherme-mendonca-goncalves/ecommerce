import { ProductsAction, ProductsActionTypes, ProductsState } from './products.types';

const initialState: ProductsState = [];

const ProductsReducer = (state = initialState, action: ProductsAction) => {
  switch (action.type) {
    case ProductsActionTypes.SET_PRODUCTS: {
      const { products } = action.payload;
      return products;
    }
    default: {
      return state;
    }
  }
};

export default ProductsReducer;
