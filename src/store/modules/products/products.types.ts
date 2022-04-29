import { Image } from '../common/common.types';

export enum ProductsActionTypes {
  SET_PRODUCTS = 'SET_PRODUCTS'
}

export type Product = {
  id: number;
  name: string;
  description: string;
  image: Image;
  price: number;
  featured: boolean;
}

export type ProductsAction = {
  type: ProductsActionTypes,
  payload: {
    products?: Array<Product>
  }
}

export type ProductsState = Array<Product>;
