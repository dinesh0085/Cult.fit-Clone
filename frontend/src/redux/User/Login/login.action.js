import axios from "axios";
import {
  LOGIN_ERROR,
  LOGIN_ERROR_EMPTY_FIELD,
  LOGIN_ERROR_INAVLID_DETAILS,
  LOGIN_ERROR_NOT_REGISTERED,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
} from "../user.types";

const loginUrl = "http://localhost:8080/api/user/login";
const login = (info) => async (dispatch) => {
  dispatch({ type: LOGIN_LOADING });
  // On Success
  try {
    let res = await axios.post(loginUrl, info);
    dispatch({ type: LOGIN_SUCCESS, payload: res.data.Token });
    console.log(res);
    return res;
  } catch (err) {
    // All Errors Here
    console.log(err);
    const status = err.response.status;
    const errorMessage = err.response.data.Message;

    if (status === 401) {
      dispatch({ type: LOGIN_ERROR_INAVLID_DETAILS, payload: errorMessage });
    }
    if (status === 405) {
      dispatch({ type: LOGIN_ERROR_NOT_REGISTERED, payload: errorMessage });
    }
    if (status === 406) {
      dispatch({ type: LOGIN_ERROR_EMPTY_FIELD, payload: errorMessage });
    } else {
      dispatch({ type: LOGIN_ERROR, payload: errorMessage });
    }
  }
};

export default login;
