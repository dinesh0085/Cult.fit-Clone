import {
  LOGIN_ERROR_NOT_REGISTERED,
  LOGIN_ERROR,
  LOGIN_ERROR_EMPTY_FIELD,
  LOGIN_ERROR_INAVLID_DETAILS,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
} from "../user.types";

let token = localStorage.getItem("token");
const initialState = {
  isLoading: false,
  isError: false,
  isAuth: false,
  errorMessage: {
    inavlidDetails: "",
    emptyDeails: "",
    notRegistered: "",
    inavlid: "",
  },
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
        errorMessage: {
          inavlidDetails: "",
          emptyDeails: "",
          notRegistered: "",
          inavlid: "",
        },
      };
    }
    case LOGIN_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        isAuth: false,
        errorMessage: {
          inavlidDetails: "",
          emptyDeails: "",
          notRegistered: "",
          inavlid: action.payload,
        },
      };
    }
    case LOGIN_ERROR_INAVLID_DETAILS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isAuth: false,
        errorMessage: {
          inavlidDetails: action.payload,
          emptyDeails: "",
          notRegistered: "",
          inavlid: "",
        },
      };
    }
    case LOGIN_ERROR_EMPTY_FIELD: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isAuth: false,
        errorMessage: {
          inavlidDetails: "",
          emptyDeails: action.payload,
          notRegistered: "",
          inavlid: "",
        },
      };
    }
    case LOGIN_ERROR_NOT_REGISTERED: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isAuth: false,
        errorMessage: {
          inavlidDetails: "",
          emptyDeails: "",
          notRegistered: action.payload,
          inavlid: "",
        },
      };
    }
    default: {
      return state;
    }
  }
}

export default loginReducer;
