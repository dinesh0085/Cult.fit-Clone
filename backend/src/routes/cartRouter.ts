import express from "express";
import { getCart, setCart, updateCart } from "../controller/cart/cart";

export const cartRouter = express.Router();

cartRouter.get("/",getCart);
cartRouter.post("/",setCart);
cartRouter.patch("/",updateCart);