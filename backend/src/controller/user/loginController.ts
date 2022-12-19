import UserModel from "../../modules/user/User";
import bcrypt from "bcrypt";
import "dotenv/config";
import jwt, { Secret, JwtPayload } from "jsonwebtoken";
import express, { Request, Response } from "express";

interface CustomRequest extends Request {
  token: string | JwtPayload;
  userID: string;
  iat: number;
  exp: number;
}

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
              { expiresIn: "5d" },
            );
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
    } catch (err) {
      console.log(err);
      res.status(408).send({ Message: "Unable to Login" });
    }
  };

  static loggedUser = async (req: Request, res: Response) => {
    // Getting the token which was set in the userMiddleware and then finding the user
    const userToken = (req as CustomRequest).token;
    // Getting user here
    const user = await UserModel.findById(userToken);
    res.send({ User: user });
  };
}

export default LoginController;
