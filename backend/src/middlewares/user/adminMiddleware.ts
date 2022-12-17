import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import "dotenv/config"

interface CustomRequest extends Request {
    token: string | JwtPayload;
    role: string;
    iat: number;
    exp: number;
}

export const adminMiddle = async (req: Request, res: Response, next: NextFunction) => {
    const token = (req.headers.token) || "";
    try {
        let user;
        if (typeof token == "string") {
            user = jwt.verify(token, process.env.JWT_SECRET_KEY || "") as CustomRequest;
            if (user.role == "admin") next();
            else return res.send("not authorized");
        } else
            return res.send("please send valid token");
    } catch (e) {
        return res.send({ e });
    }
}