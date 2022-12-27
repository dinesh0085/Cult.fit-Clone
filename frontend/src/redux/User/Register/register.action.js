import axios from "axios";
import {
  SIGNUP_ERROR,
  SIGNUP_ERROR_CONF_PASSWORD,
  SIGNUP_ERROR_EMPTY_FIELD,
  SIGNUP_ERROR_EXISTS,
  SIGNUP_LOADING,
  SIGNUP_SUCCESS,
} from "../user.types";

const registerUrl =
  "https://starter-express-api-nine.vercel.app/api/user/register";
const register = (info) => async (dispatch) => {
  console.log(info);
  dispatch({ type: SIGNUP_LOADING });
  // Success Here
  try {
    let res = await axios.post(registerUrl, info);
    console.log(res);
    dispatch({ type: SIGNUP_SUCCESS, payload: res.data.Message });
  } catch (err) {
    // All Errors Here
    console.log(err);
    const status = err.response.status;
    const errorMessage = err.response.data.Message;
    if (status === 409) {
      dispatch({ type: SIGNUP_ERROR_EXISTS, payload: errorMessage });
    }
    if (status === 406) {
      dispatch({ type: SIGNUP_ERROR_EMPTY_FIELD, payload: errorMessage });
    }
    if (status === 400) {
      dispatch({ type: SIGNUP_ERROR, payload: errorMessage });
    }
    if (status === 405) {
      dispatch({ type: SIGNUP_ERROR_CONF_PASSWORD, payload: errorMessage });
    }
  }
};

export default register;
