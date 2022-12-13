import mongoose from "mongoose";

export const mindfullModel = mongoose.model("mindfull", new mongoose.Schema({
    image: String,
    title: String,
    desc: String,
    url: String,
    packs: Number
}));