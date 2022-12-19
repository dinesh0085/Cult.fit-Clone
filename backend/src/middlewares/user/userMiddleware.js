"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
// import { CustomRequest } from "./userMiddleware";
const secretKey = process.env.JWT_SECRET_KEY || "";
var checkUserAuth = async (req, res, next) => {
    let token;
    const { authorization } = req.headers;
    // !! Keep in mind to add "Bearer" before token
    if (authorization && authorization.startsWith("Bearer")) {
        try {
            // Getting token from header
            token = authorization.split(" ")[1];
            // Verifying Token
            const { userID } = jsonwebtoken_1.default.verify(token, secretKey);
            // Saving the token for the user so that we can access the user information from the token
            req.token = userID;
            // If everything above is good the will pass the next
            next();
        }
        catch (err) {
            // Token is there but user not authorized
            res.send({
                Status: "Failed",
                Message: "Unauthorised User",
            });
        }
    }
    // There is no token
    if (!token) {
        res.send({
            Status: "Failed",
            Message: "Unauthorised User, No Token",
        });
    }
};
exports.default = checkUserAuth;
