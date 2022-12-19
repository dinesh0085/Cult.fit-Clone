import mongoose from "mongoose";

export const careModel = mongoose.model(
  "care",
  new mongoose.Schema({
    image: String,
    title: String,
    desc: String,
    dprice: String,
    price: Number,
    tests: [Object],
    recomends: [Object],
  }),
);
