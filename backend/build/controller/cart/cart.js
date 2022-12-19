"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCart = exports.setCart = exports.getCart = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const cartModel_1 = require("../../modules/cartModel");
const careModel_1 = require("../../modules/product/careModel");
const getCart = async (req, res) => {
    const user = req.token;
    try {
        let cart = await cartModel_1.cartModel.find({ user: user });
        return res.send(cart);
    }
    catch (e) {
        if (e instanceof mongoose_1.default.Error.ValidationError)
            return res.send(e.message);
        else
            return res.status(501).send("internal server error");
    }
};
exports.getCart = getCart;
const setCart = async (req, res) => {
    const { product } = req.body;
    const user = req.token;
    if (product && user)
        try {
            let prod = await careModel_1.careModel.findById(product, { tests: 0, recomends: 0 });
            let cart = await cartModel_1.cartModel.create({ user: user, product: prod });
            return res.send(cart);
        }
        catch (e) {
            if (e instanceof mongoose_1.default.Error.ValidationError)
                return res.send(e.message);
            else
                return res.status(501).send("internal server error");
        }
    else
        return res.send("provide the product details");
};
exports.setCart = setCart;
const deleteCart = async (req, res) => {
    const product = req.params.id;
    const user = req.token;
    console.log("token", user);
    console.log("id", product);
    try {
        let cart = await cartModel_1.cartModel.deleteOne({ user: user, product: product });
        let dcart = await cartModel_1.cartModel.findByIdAndDelete(product);
        res.send(cart);
    }
    catch (e) {
        if (e instanceof mongoose_1.default.Error.ValidationError)
            return res.send(e.message);
        else
            return res.status(501).send("internal server error");
    }
};
exports.deleteCart = deleteCart;
