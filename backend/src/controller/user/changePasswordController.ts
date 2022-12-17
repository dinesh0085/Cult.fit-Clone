import UserModel from "../../modules/user/User";
import bcrypt from "bcrypt";
import "dotenv/config";
import { JwtPayload } from "jsonwebtoken";
import { Request, Response } from "express";

interface CustomRequest extends Request {
  token: string | JwtPayload;
  userID: string;
  iat: number;
  exp: number;
}

class changePasswordController {
  static changeUserPassword = async (req: Request, res: Response) => {
    const { password, password_confirmation } = req.body;
    if (password && password_confirmation) {
      if (password !== password_confirmation) {
        res.send({
          Status: "Failed",
          Message: "Password & confirm password doesn't match",
        });
      } else {
        const salt = await bcrypt.genSalt(14);
        const newHashPassword = await bcrypt.hash(password, salt);

        // Getting the token which was set in the userMiddleware and then finding the user for which the password needs to be changed
        const userToken = (req as CustomRequest).token;
        let user = await UserModel.findById(userToken).select("-password");

        // Changing password here
        await UserModel.findByIdAndUpdate(user?._id, {
          $set: { password: newHashPassword },
        });

        res.status(201).send({
          Status: "Success",
          Message: "Password changed successfully",
        });
      }
    } else {
      res.send({ Status: "Failed", Message: "All fields are required" });
    }
  };
}

export default changePasswordController;
