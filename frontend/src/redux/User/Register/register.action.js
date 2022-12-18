import axios from "axios";
import { SIGNUP_ERROR, SIGNUP_LOADING, SIGNUP_SUCCESS } from "../user.types";

const registerUrl = "http://18.182.4.15:8080/api/user/register";
const register = (info) => async (dispatch) => {
  console.log(info);
  dispatch({ type: SIGNUP_LOADING });
  try {
    let res = await axios.post(registerUrl, info);
    console.log(res);
    dispatch({ type: SIGNUP_SUCCESS, payload: res.data });
  } catch (err) {
    console.log(err);
    dispatch({ type: SIGNUP_ERROR });
  }
};

export default register;
