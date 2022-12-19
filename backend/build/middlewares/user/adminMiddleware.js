"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminMiddle = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
const adminMiddle = async (req, res, next) => {
    const token = (req.headers.token) || "";
    try {
        let user;
        if (typeof token == "string") {
            user = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET_KEY || "");
            if (user.role == "admin")
                next();
            else
                return res.send("not authorized");
        }
        else
            return res.send("please send valid token");
    }
    catch (e) {
        return res.send({ e });
    }
};
exports.adminMiddle = adminMiddle;
