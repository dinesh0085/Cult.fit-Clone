import { Request, Response } from "express";
import mongoose from "mongoose";
import { doctersModel } from "../modules/docterModel";


export const getDocters = async (req: Request, res: Response) => {

    const search = req.query.search || "";
    let limit = (req.query.limit) || 10;
    if (typeof limit != "number") limit = 10;

    try {
        let full = await doctersModel.find().limit(limit);
        if (search && typeof search == "string") {
            let srch = full.filter((e) => e.name?.toLocaleLowerCase()?.includes(search.toLocaleLowerCase()))
            return res.send(srch);
        } else
            return res.send(full);
    } catch (e) {
        if (e instanceof mongoose.Error.ValidationError)
            return res.send(e.message);
        else
            return res.status(501).send("internal server error")
    }
}