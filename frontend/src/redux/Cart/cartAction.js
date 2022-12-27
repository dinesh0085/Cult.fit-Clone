import axios from "axios";

export const AddCart = "addtocart";
export const RmoveCart = "removefromcart";
export const GetCart = "getcart";



let url = `https://starter-express-api-nine.vercel.app/cart`;

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
    
    if(typeof res.data === 'object'){
        return true;
    }else{
        return false;
    }
}

export const removeCart = (product, token) => async (dispatch) => {
    console.log(token);
    axios.defaults.headers.common["authorization"] = "Bearer " + token;
    let res = await axios.delete(url+"/"+product);
    // console.log(res);
    dispatch({ type: RmoveCart, payload: { id: product } })
}

