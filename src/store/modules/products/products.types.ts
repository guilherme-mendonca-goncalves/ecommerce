import { Image } from '../common/common.types';

export enum ProductsActionTypes {
  SET_PRODUCTS = 'SET_PRODUCTS'
}

export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: Image;
  brand: string;
  category: string;
  thumbnail: string;
  images: Array<string>;
}

export type ProductsAction = {
  type: ProductsActionTypes,
  payload: {
    products?: Array<Product>
  }
}

export type ProductsState = Array<Product>;
