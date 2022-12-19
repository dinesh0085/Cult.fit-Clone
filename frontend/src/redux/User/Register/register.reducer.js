import {
  SIGNUP_ERROR,
  SIGNUP_ERROR_CONF_PASSWORD,
  SIGNUP_ERROR_EMPTY_FIELD,
  SIGNUP_ERROR_EXISTS,
  SIGNUP_LOADING,
  SIGNUP_SUCCESS,
} from "../user.types";

const initialState = {
  isLoading: false,
  isError: false,
  errorMessage: "",
  successMessage: "",
};

function registerReducer(state = initialState, action) {
  switch (action.type) {
    case SIGNUP_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case SIGNUP_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        errorMessage: "",
        successMessage: action.payload,
      };
    }
    case SIGNUP_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        errorMessage: action.payload,
        successMessage: "",
      };
    }
    case SIGNUP_ERROR_EMPTY_FIELD: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        errorMessage: action.payload,
        successMessage: "",
      };
    }
    case SIGNUP_ERROR_CONF_PASSWORD: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        errorMessage: action.payload,
        successMessage: "",
      };
    }
    case SIGNUP_ERROR_EXISTS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        errorMessage: action.payload,
        successMessage: "",
      };
    }

    default: {
      return state;
    }
  }
}
export default registerReducer;
