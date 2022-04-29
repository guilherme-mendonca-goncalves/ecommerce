import { CommonActionTypes } from './common.types';

const setLoading = (loading: boolean) => {
  return {
    type: CommonActionTypes.SET_LOADING,
    payload: {
      loading
    }
  };
};

const commonActions = {
  setLoading
};

export default commonActions;