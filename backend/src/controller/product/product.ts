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

export const setCare = async (req: Request, res: Response) => {
    const { image = "", title = "", desc = "", price = 0, tests = [{}], } = req.body;
    if (title && price && tests.length)
        try {
            let care = await careModel.create({ image, title, desc, price, tests });
            return res.send(care);
        } catch (e) {
            if (e instanceof mongoose.Error.ValidationError)
                return res.send(e.message);
            else
                return res.status(501).send("internal server error")
        }
    else
        return res.send("please provide complete details");
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


export const setMind = async (req: Request, res: Response) => {
    const { image = "", title = "", desc = "", price = 0, } = req.body;
    if (title && price)
        try {
            let care = await mindModel.create({ image, title, desc, price });
            return res.send(care);
        } catch (e) {
            if (e instanceof mongoose.Error.ValidationError)
                return res.send(e.message);
            else
                return res.status(501).send("internal server error")
        }
    else
        return res.send("please provide complete details");
}

