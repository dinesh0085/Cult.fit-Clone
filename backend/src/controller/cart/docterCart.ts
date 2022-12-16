import { Request, Response } from "express";
import mongoose from "mongoose";
import { CustomRequest } from "../../middlewares/user/userMiddleware";


export const getCart = async (req: Request, res: Response) => {
    let user = (req as CustomRequest).token;
    try {
        
    } catch (e) {
        if (e instanceof mongoose.Error.ValidationError)
            return res.send(e.message);
        else
            return res.status(501).send("internal server error")
    }
}