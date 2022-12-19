"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartRouter = void 0;
const express_1 = __importDefault(require("express"));
const cart_1 = require("../controller/cart/cart");
const docterCart_1 = require("../controller/cart/docterCart");
exports.cartRouter = express_1.default.Router();
exports.cartRouter.get("/", cart_1.getCart);
exports.cartRouter.post("/", cart_1.setCart);
exports.cartRouter.delete("/:id", cart_1.deleteCart);
exports.cartRouter.get("/docter", docterCart_1.getDocterCart);
exports.cartRouter.post("/docter", docterCart_1.setDocterCart);
exports.cartRouter.delete("/docter", docterCart_1.deleteDocterCart);
