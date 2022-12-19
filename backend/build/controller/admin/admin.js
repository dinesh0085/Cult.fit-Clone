"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminLogin = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const User_1 = __importDefault(require("../../modules/user/User"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
const adminLogin = async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
    try {
        const user = await User_1.default.findOne({ email });
        const isMatch = await bcrypt_1.default.compare(password, (user === null || user === void 0 ? void 0 : user.password) || "");
        if (isMatch && (user === null || user === void 0 ? void 0 : user.role) == "admin")
            return res.send(jsonwebtoken_1.default.sign({ role: "admin", userId: user.id }, process.env.JWT_SECRET_KEY || ""));
        else
            return res.send("you are not authorized admin");
    }
    catch (e) {
        console.log(e);
        if (e instanceof mongoose_1.default.Error.ValidationError)
            return res.send(e.message);
        else
            return res.status(501).send("internal server error");
    }
};
exports.adminLogin = adminLogin;
