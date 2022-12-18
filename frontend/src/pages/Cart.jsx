import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCarts,addCart } from '../redux/Cart/cartAction';

const Cart = () => {

    const dispatch = useDispatch();

    const { cartItems, price } = useSelector((store) => store.cart);

    useEffect(()=>{
        dispatch(getCarts("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2MzliM2ViMzVkY2EyODRkNGVkZmNjZWMiLCJpYXQiOjE2NzEzMzc4NDEsImV4cCI6MTY3MTc2OTg0MX0.gAyGngbn3cF5P1hv5kKD7O0aLjDdEuAmTtV04Q6Fu9g"))
        console.log(cartItems);
    },[]);

    return (
        <div>
            <button 
            onClick={()=>{
                dispatch(addCart("639879faae12ba6f42a86232",
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2MzliM2ViMzVkY2EyODRkNGVkZmNjZWMiLCJpYXQiOjE2NzEzMzc4NDEsImV4cCI6MTY3MTc2OTg0MX0.gAyGngbn3cF5P1hv5kKD7O0aLjDdEuAmTtV04Q6Fu9g"))
            }}
            style={{margin: "100px"}}>add</button>
        </div>
    );
}

export default Cart;
