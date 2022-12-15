import { Request, Response } from "express";
import mongoose from "mongoose";
import { cartModel } from "../../modules/cartModel";
import { careModel } from "../../modules/product/careModel";


export const getCart = async (req: Request, res: Response) => {
    try {
        let cart = await cartModel.find({ user: req.user });
        return res.send(cart);
    } catch (e) {
        if (e instanceof mongoose.Error.ValidationError)
            return res.send(e.message);
        else
            return res.status(501).send("internal server error")
    }
}

export const setCart = async (req: Request, res: Response) => {
    const { product, user } = req.body;
    if (product && user)
        try {
            let prod = await careModel.findById(product);
            let cart = await cartModel.create({ user: req.user, product: prod });
            return res.send(cart);
        } catch (e) {
            if (e instanceof mongoose.Error.ValidationError)
                return res.send(e.message);
            else
                return res.status(501).send("internal server error")
        }
    else
        return res.send("provide the product details");
}

export const updateCart = async (req: Request, res: Response) => {
    try {
        const { product, user } = req.body;

    } catch (e) {
        if (e instanceof mongoose.Error.ValidationError)
            return res.send(e.message);
        else
            return res.status(501).send("internal server error")
    }
}