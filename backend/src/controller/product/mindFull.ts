import { Request, Response } from "express";
import mongoose from "mongoose";
import { mindfullModel } from "../../modules/product/mindFull";


export const getMindFull = async (req: Request, res: Response) => {
    try {
        let full = await mindfullModel.find();
        res.send(full);
    } catch (e) {
        if (e instanceof mongoose.Error.ValidationError)
            res.send(e.message);
        else
            res.status(501).send("internal server error")
    }
}

export const setMindFull = async (req: Request, res: Response) => {
    const { image = "", title = "", desc = "", price = 0, } = req.body;
    try {
        let full = await mindfullModel.create({ image, title, desc, price });
        res.send(full);
    } catch (e) {
        if (e instanceof mongoose.Error.ValidationError)
            res.send(e.message);
        else
            res.status(501).send("internal server error")
    }
}