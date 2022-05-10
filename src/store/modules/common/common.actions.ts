import { CommonActionTypes } from './common.types';

const setLoading = (loading: boolean) => {
  return {
    type: CommonActionTypes.SET_LOADING,
    payload: {
      loading
    }
  };
};

const setSearch = (term: string | null) => {
  return {
    type: CommonActionTypes.SET_SEARCH,
    payload: {
      search: term
    }
  };
};

const commonActions = {
  setLoading,
  setSearch
};

export default commonActions;
