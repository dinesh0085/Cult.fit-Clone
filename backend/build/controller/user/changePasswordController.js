"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../../modules/user/User"));
const bcrypt_1 = __importDefault(require("bcrypt"));
require("dotenv/config");
class changePasswordController {
}
_a = changePasswordController;
changePasswordController.changeUserPassword = async (req, res) => {
    const { password, password_confirmation } = req.body;
    if (password && password_confirmation) {
        if (password !== password_confirmation) {
            res.send({
                Status: "Failed",
                Message: "Password & confirm password doesn't match",
            });
        }
        else {
            const salt = await bcrypt_1.default.genSalt(14);
            const newHashPassword = await bcrypt_1.default.hash(password, salt);
            // Getting the token which was set in the userMiddleware and then finding the user for which the password needs to be changed
            const userToken = req.token;
            let user = await User_1.default.findById(userToken).select("-password");
            // Changing password here
            await User_1.default.findByIdAndUpdate(user === null || user === void 0 ? void 0 : user._id, {
                $set: { password: newHashPassword },
            });
            res.status(201).send({
                Status: "Success",
                Message: "Password changed successfully",
            });
        }
    }
    else {
        res.send({ Status: "Failed", Message: "All fields are required" });
    }
};
exports.default = changePasswordController;
