import { SIGNUP_ERROR, SIGNUP_LOADING, SIGNUP_SUCCESS } from "../user.types";

const initialState = {
  isLoading: false,
  isError: false,
};

function registerReducer(state = initialState, action) {
  switch (action.type) {
    case SIGNUP_LOADING: {
      return {
        ...state,
      };
    }
    case SIGNUP_SUCCESS: {
      return {
        ...state,
      };
    }
    case SIGNUP_ERROR: {
      return {
        ...state,
      };
    }
    default: {
      return state;
    }
  }
}
export default registerReducer;
