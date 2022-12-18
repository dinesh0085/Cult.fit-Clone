import { AddCart, GetCart, RmoveCart } from "./cartAction";

const initState = {
    cartItems: [],
    price: 0
}

export const cartReducer = (state = initState, { type, payload }) => {
    switch (type) {

        case GetCart:
            {
                let price = 0;
                console.log(payload)
                payload.map((e, i) => price += (+e.product.price))
                return { cartItems: payload, price: price }
            }

        case AddCart:
            return {
                price: state.price + payload.price,
                cartItems: [...state.cartItems, payload.product]
            }

        case RmoveCart:
            {
               
                let b = 0;
                let a = [];
                // eslint-disable-next-line array-callback-return
                state.cartItems.map((e, i) => {
                    if (e._id == payload.id) b = e.product.price;
                    else a.push(e);
                })
                console.log(state.price, b)
                return { cartItems: a, price: (state.price - b) }
            }


        default:
            return state;
    }
}