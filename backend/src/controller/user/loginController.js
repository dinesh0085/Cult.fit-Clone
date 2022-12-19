"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../../modules/user/User"));
const bcrypt_1 = __importDefault(require("bcrypt"));
require("dotenv/config");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class LoginController {
}
_a = LoginController;
LoginController.userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        // Checking both if email & password are present
        if (email && password) {
            const user = await User_1.default.findOne({ email: email });
            if (user != null) {
                const isMatch = await bcrypt_1.default.compare(password, user.password);
                // Checking Both email and password are correct or not
                if (user.email === email && isMatch) {
                    let token = jsonwebtoken_1.default.sign({ userID: user === null || user === void 0 ? void 0 : user._id }, process.env.JWT_SECRET_KEY || "", { expiresIn: "5d" });
                    res.status(200).send({
                        Status: "Success",
                        Message: "Login Successfully",
                        Token: token,
                    });
                }
                // Checking either email or password is incorrect
                else {
                    res.status(401).send({
                        Status: "Failed",
                        Message: "Incorrect Details. Please check your email or password",
                    });
                }
            }
            // Checking if user not registered
            else {
                res
                    .status(405)
                    .send({ Status: "Failed", Message: "User not registered" });
            }
        }
        // Checking all fields are there in input
        else {
            res
                .status(406)
                .send({ Status: "Failed", Message: "All fields are required" });
        }
    }
    catch (err) {
        console.log(err);
        res.status(408).send({ Message: "Unable to Login" });
    }
};
LoginController.loggedUser = async (req, res) => {
    // Getting the token which was set in the userMiddleware and then finding the user
    const userToken = req.token;
    // Getting user here
    const user = await User_1.default.findById(userToken);
    res.send({ User: user });
};
exports.default = LoginController;
