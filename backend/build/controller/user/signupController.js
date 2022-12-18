"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const User_1 = __importDefault(require("./../../modules/user/User"));
class SignupController {
}
_a = SignupController;
SignupController.userRegistration = async (req, res) => {
    // Taking input from User
    const { name, email, password, password_confirmation, tc } = req.body;
    const user = await User_1.default.findOne({ email: email });
    // Checking if user is already registered in the database
    if (user) {
        res.send({ Status: "Failed", Message: "Email already exists" });
    }
    // If user is not in database creating new one
    else {
        // Checking if all the fields are there or not
        if (name && email && password /* && password_confirmation && tc */) {
            // Checking password is equal to confirm password
            // if (password === password_confirmation) {
            try {
                const salt = await bcrypt_1.default.genSalt(14);
                const hashPassword = await bcrypt_1.default.hash(password, salt);
                const newUser = new User_1.default({
                    name: name,
                    email: email,
                    password: hashPassword,
                    tc: tc,
                });
                await newUser.save();
                const saved_user = await User_1.default.findOne({ email: email });
                // Generating JWT Token
                let token = jsonwebtoken_1.default.sign({ userID: saved_user === null || saved_user === void 0 ? void 0 : saved_user._id }, process.env.JWT_SECRET_KEY || "", { expiresIn: "5d" });
                res.status(201).send({
                    Status: "Success",
                    Message: "User Created Successfully",
                    Token: token,
                });
            }
            catch (err) {
                console.log(err);
                res.send({
                    Status: "Failed",
                    Message: "Can't Register",
                    err: err,
                });
            }
            // }
            // If password and confirm password not matching
            // else {
            //   res.send({
            //     Status: "Failed",
            //     Message: "Password and Confirm Password doesn't match",
            //   });
            // }
        }
        // If some fields or empty form is submitted then this will be used
        else {
            res.send({ Status: "Failed", Message: "All fields are required" });
        }
    }
};
exports.default = SignupController;
