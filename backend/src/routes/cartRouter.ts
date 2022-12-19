import express from "express";
import { deleteCart, getCart, setCart } from "../controller/cart/cart";
import {
  deleteDocterCart,
  getDocterCart,
  setDocterCart,
} from "../controller/cart/docterCart";

export const cartRouter = express.Router();

cartRouter.get("/", getCart);
cartRouter.post("/", setCart);
cartRouter.delete("/:id", deleteCart);

cartRouter.get("/docter", getDocterCart);
cartRouter.post("/docter", setDocterCart);
cartRouter.delete("/docter", deleteDocterCart);
