import mongoose from "mongoose";

export const mindModel = mongoose.model("mind", new mongoose.Schema({
    image: String,
    title: String,
    desc: String,
    price: Number,
}));