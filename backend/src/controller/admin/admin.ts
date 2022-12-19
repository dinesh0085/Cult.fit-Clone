import { Request, Response } from "express";
import mongoose from "mongoose";
import { CustomRequest } from "../../middlewares/user/userMiddleware";
import UserModel from "../../modules/user/User";
import bcrypt from "bcrypt";
import jwt, { Secret, JwtPayload } from "jsonwebtoken";
import "dotenv/config";

export const adminLogin = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  console.log(email, password);
  try {
    const user = await UserModel.findOne({ email });
    const isMatch = await bcrypt.compare(password, user?.password || "");
    if (isMatch && user?.role == "admin")
      return res.send(
        jwt.sign(
          { role: "admin", userId: user.id },
          process.env.JWT_SECRET_KEY || "",
        ),
      );
    else return res.send("you are not authorized admin");
  } catch (e) {
    console.log(e);
    if (e instanceof mongoose.Error.ValidationError) return res.send(e.message);
    else return res.status(501).send("internal server error");
  }
};
