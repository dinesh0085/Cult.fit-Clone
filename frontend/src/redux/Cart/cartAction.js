import axios from "axios";

export const AddCart = "addtocart";
export const RmoveCart = "removefromcart";
export const GetCart = "getcart";



let url = `http://localhost:8080/cart`;

export const getCarts = (token) => async (dispatch) => {
    axios.defaults.headers.common["authorization"] = "Bearer " + token;
    let res = await axios.get(url)
    dispatch({ type: GetCart, payload: res.data })
}

export const addCart = (product, token) => async (dispatch) => {
    axios.defaults.headers.common["authorization"] = "Bearer " + token;
    let res = await axios.post(url, { product });
    console.log(res.data);
    dispatch({ type: AddCart, payload: { product: res.data, price: res.data.price, } })
}

export const removeCart = (product, token) => async (dispatch) => {
    axios.defaults.headers.common["authorization"] = "Bearer " + token;
    let res = await axios.delete(url, { product });
    dispatch({ type: RmoveCart, payload: { id: res.data._id } })
}

