import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "./Cart/cartReducer";
import loginReducer from "./User/Login/login.reducer";
import registerReducer from "./User/Register/register.reducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  login: loginReducer,
  register: registerReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
