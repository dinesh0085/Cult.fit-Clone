import {
  LOGIN_ERROR_NOT_REGISTERED,
  LOGIN_ERROR,
  LOGIN_ERROR_EMPTY_FIELD,
  LOGIN_ERROR_INAVLID_DETAILS,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  GET_LOGGED_USER,
} from "../user.types";

let token = localStorage.getItem("token");
const initialState = {
  isLoading: false,
  isError: false,
  isAuth: false,
  errorMessage: "",
  successMessage: "",
  token: token || "",
};

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_LOADING: {
      console.log(state);
      return {
        ...state,
        isLoading: true,
      };
    }
    case LOGIN_SUCCESS: {
      localStorage.setItem("token", action.payload);
      return {
        ...state,
        isLoading: false,
        isError: false,
        isAuth: true,
        errorMessage: "",
        successMessage: action.payload,
      };
    }
    case LOGIN_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        isAuth: false,
        errorMessage: action.payload,
        successMessage: "",
      };
    }
    case LOGIN_ERROR_INAVLID_DETAILS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isAuth: false,
        errorMessage: action.payload,
        successMessage: "",
      };
    }
    case LOGIN_ERROR_EMPTY_FIELD: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isAuth: false,
        errorMessage: action.payload,
        successMessage: "",
      };
    }
    case LOGIN_ERROR_NOT_REGISTERED: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isAuth: false,
        errorMessage: action.payload,
        successMessage: "",
      };
    }

    case GET_LOGGED_USER: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        userInfo: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}

export default loginReducer;
