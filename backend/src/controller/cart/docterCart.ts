import { Request, Response } from "express";
import mongoose from "mongoose";
import { CustomRequest } from "../../middlewares/user/userMiddleware";
import { docterCartModel } from "../../modules/docterCartModel";
import { doctersModel } from "../../modules/docterModel";


export const getDocterCart = async (req: Request, res: Response) => {
    let user = (req as CustomRequest).token;
    try {
        let docters = await docterCartModel.find({ user });
        res.send(docters);
    } catch (e) {
        if (e instanceof mongoose.Error.ValidationError)
            return res.send(e.message);
        else
            return res.status(501).send("internal server error")
    }
}

export const setDocterCart = async (req: Request, res: Response) => {
    let user = (req as CustomRequest).token;
    const { startTime, docter } = req.body;
    try {
        let Docter = await doctersModel.findById(docter);
        let d = await docterCartModel.findOne({ docter: Docter });
        if (d) {
            let st = d.startTime;
            if (Number(st) - Date.now() < 216000)
                return res.send("this docter is allready apointed");
        }
        let docters = await docterCartModel.create({ user, Docter, startTime });
        return res.send(docters);
    } catch (e) {
        if (e instanceof mongoose.Error.ValidationError)
            return res.send(e.message);
        else
            return res.status(501).send("internal server error")
    }
}

export const deleteDocterCart = async (req: Request, res: Response) => {
    let user = (req as CustomRequest).token;
    try {
        let docter = await docterCartModel.findByIdAndDelete(req.body.docter);
    } catch (e) {
        if (e instanceof mongoose.Error.ValidationError)
            return res.send(e.message);
        else
            return res.status(501).send("internal server error")
    }
}