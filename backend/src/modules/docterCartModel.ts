import mongoose from "mongoose";

export const doctersModel = mongoose.model("docters", new mongoose.Schema({
    image: String,
    name: String,
    qualify: String,
    specialize: String,
    price: Number,
    langauge: Array
}));