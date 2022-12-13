import { Request, Response } from "express";
import mongoose from "mongoose";
import { careModel } from "../../modules/product/careModel";
import { mindModel } from "../../modules/product/mindModel";


export const getCare = async (req: Request, res: Response) => {
    try {
        let care = await careModel.find();
        res.send(care);
    } catch (e) {
        if (e instanceof mongoose.Error.ValidationError)
            res.send(e.message);
        else
            res.status(501).send("internal server error")
    }
}

export const getMind = async (req: Request, res: Response) => {
    try {
        let mind = await mindModel.find();
        res.send(mind);
    } catch (e) {
        if (e instanceof mongoose.Error.ValidationError)
            res.send(e.message);
        else
            res.status(501).send("internal server error")
    }
}