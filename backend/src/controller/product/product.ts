import { Request, Response } from "express";
import mongoose from "mongoose";
import { careModel } from "../../modules/product/careModel";
import { mindModel } from "../../modules/product/mindModel";


export const getCare = async (req: Request, res: Response) => {
    try {
        let care = await careModel.find({}, { tests: 0, recomends: 0 });
        return res.send(care);
    } catch (e) {
        if (e instanceof mongoose.Error.ValidationError)
            return res.send(e.message);
        else
            return res.status(501).send("internal server error")
    }
}

export const getCareSingle = async (req: Request, res: Response) => {

    try {
        let care = await careModel.findById(req.params.id);
        return res.send(care);
    } catch (e) {
        if (e instanceof mongoose.Error.ValidationError)
            return res.send(e.message);
        else
            return res.status(501).send("internal server error")
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

export const getMindSingle = async (req: Request, res: Response) => {
    try {
        let mind = await mindModel.findById(req.params.id);
        res.send(mind);
    } catch (e) {
        if (e instanceof mongoose.Error.ValidationError)
            res.send(e.message);
        else
            res.status(501).send("internal server error")
    }
}


