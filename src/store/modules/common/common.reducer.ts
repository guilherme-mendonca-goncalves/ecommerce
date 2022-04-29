import { CommonAction, CommonActionTypes, CommonState } from './common.types';

const initialState: CommonState = {
  loading: false
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
    default: {
      return state;
    }
  }
};

export default CommonReducer;
