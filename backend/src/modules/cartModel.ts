import mongoose from "mongoose";

export const cartModel = mongoose.model("cart", new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
    },
    product: {
        type: Object,
    }
}));