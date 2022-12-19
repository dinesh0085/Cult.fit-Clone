import { Request, Response } from "express";
import mongoose from "mongoose";
import { cartModel } from "../../modules/cartModel";
import { careModel } from "../../modules/product/careModel";
import { CustomRequest } from "../../middlewares/user/userMiddleware";

export const getCart = async (req: Request, res: Response) => {
    const user = (req as CustomRequest).token;
    
    try {
        let cart = await cartModel.find({ user: user });
        return res.send(cart);
    } catch (e) {
        if (e instanceof mongoose.Error.ValidationError) return res.send(e.message);
        else return res.status(501).send("internal server error");
    }
};

export const setCart = async (req: Request, res: Response) => {
    const { product } = req.body;
    const user = (req as CustomRequest).token;

    if (product && user)
        try {
            let prod = await careModel.findById(product,{ tests: 0, recomends: 0 });
            let cart = await cartModel.create({ user: user, product: prod });
            return res.send(cart);
        } catch (e) {
            if (e instanceof mongoose.Error.ValidationError)
                return res.send(e.message);
            else return res.status(501).send("internal server error");
        }
    else return res.send("provide the product details");
};

export const deleteCart = async (req: Request, res: Response) => {
    const product = req.params.id;
    const user = (req as CustomRequest).token;
    console.log("token", user);
    console.log("id", product);
    
    try {
        let cart = await cartModel.deleteOne({ user: user, product: product });
        let dcart = await cartModel.findByIdAndDelete(product);
        res.send(cart);
    } catch (e) {
        if (e instanceof mongoose.Error.ValidationError) return res.send(e.message);
        else return res.status(501).send("internal server error");
    }
};
