import express from "express";
import { deleteCart, getCart, setCart,  } from "../controller/cart/cart";

export const cartRouter = express.Router();

cartRouter.get("/",getCart);
cartRouter.post("/",setCart);
cartRouter.delete("/",deleteCart);