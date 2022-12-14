import UserModel from "../../modules/user/User";
import bcrypt from "bcrypt";
import "dotenv/config";
import jwt, { Secret, JwtPayload } from "jsonwebtoken";
import express, { Request, Response } from "express";

class LoginController {
  static userLogin = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
      // Checking both if email & password are present
      if (email && password) {
        const user = await UserModel.findOne({ email: email });
        if (user != null) {
          const isMatch = await bcrypt.compare(password, user.password);
          // Checking Both email and password are correct or not
          if (user.email === email && isMatch) {
            let token = jwt.sign(
              { userID: user?._id },
              process.env.JWT_SECRET_KEY || "",
              { expiresIn: "5d" }
            );
            res.status(201).send({
              Status: "Success",
              Message: "Login Successfully",
              Token: token,
            });
          }
          // Checking either email or password is incorrect
          else {
            res.send({
              Status: "Failed",
              Message: "Incorrect Details. Please check your email or password",
            });
          }
        }
        // Checking if user not registered
        else {
          res.send({ Status: "Failed", Message: "User not registered" });
        }
      }
      // Checking all fields are there in input
      else {
        res.send({ Status: "Failed", Message: "All fields are required" });
      }
    } catch (err) {
      console.log(err);
      res.send("Unable to Login");
    }
  };

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
        const hashPassword = await bcrypt.hash(password, salt);
      }
    } else {
      res.send({ Status: "Failed", Message: "All fields are required" });
    }
  };
}

export default LoginController;
