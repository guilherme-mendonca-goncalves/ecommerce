export enum CommonActionTypes {
  SET_LOADING = 'SET_LOADING',
  SET_SEARCH = 'SET_SEARCH'
}

export type Image = {
  alt: string;
  src: string;
}

export type CommonState = {
  loading: boolean;
  search: string | null;
}

export type CommonAction = {
  type: CommonActionTypes,
  payload: {
    loading?: boolean;
    search?: string;
  }
}
