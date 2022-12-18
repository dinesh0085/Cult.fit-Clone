import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "./Cart/cartReducer";


const rootReducer = combineReducers({
    cart: cartReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));