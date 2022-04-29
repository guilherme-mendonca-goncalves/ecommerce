export enum CommonActionTypes {
  SET_LOADING = 'SET_LOADING'
}

export type Image = {
  alt: string;
  src: string;
}

export type CommonState = {
  loading: boolean;
}

export type CommonAction = {
  type: CommonActionTypes,
  payload: {
    loading?: boolean;
  }
}
