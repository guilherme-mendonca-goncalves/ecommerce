import { CommonAction, CommonActionTypes, CommonState } from './common.types';

const initialState: CommonState = {
  loading: false,
  search: null
};

const CommonReducer = (state = initialState, action: CommonAction) => {
  switch (action.type) {
    case CommonActionTypes.SET_LOADING: {
      const { loading } = action.payload;
      return {
        ...state,
        loading
      };
    }
    case CommonActionTypes.SET_SEARCH: {
      const { search } = action.payload;
      return {
        ...state,
        search
      };
    }
    default: {
      return state;
    }
  }
};

export default CommonReducer;
