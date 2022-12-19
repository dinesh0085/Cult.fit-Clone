import "dotenv/config";
import bcrypt from "bcrypt";
import jwt, { Secret, JwtPayload } from "jsonwebtoken";
import express, { Request, Response } from "express";
import UserModel from "./../../modules/user/User";

interface User {
  name: string;
  lname: string;
  email: string;
  password: string;
  password_confirmation: string;
  tc: boolean;
}

class SignupController {
  static userRegistration = async (req: Request, res: Response) => {
    // Taking input from User
    const { name, lname, email, password, password_confirmation, tc }: User =
      req.body;

    const user = await UserModel.findOne({ email: email });
    // Checking if user is already registered in the database
    if (user) {
      res
        .status(409)
        .send({ Status: "Failed", Message: "Email already exists" });
    }
    // If user is not in database creating new one
    else {
      // Checking if all the fields are there or not
      if (name && email && password && password_confirmation && tc) {
        // Checking password is equal to confirm password
        if (password === password_confirmation) {
          try {
            const salt = await bcrypt.genSalt(14);
            const hashPassword = await bcrypt.hash(password, salt);
            const newUser = new UserModel({
              name: name,
              email: email,
              password: hashPassword,
              tc: tc,
            });
            await newUser.save();
            const saved_user = await UserModel.findOne({ email: email });
            // Generating JWT Token
            let token = jwt.sign(
              { userID: saved_user?._id },
              process.env.JWT_SECRET_KEY || "",
              { expiresIn: "5d" },
            );
            res.status(201).send({
              Status: "Success",
              Message: "User Created Successfully",
              Token: token,
            });
          } catch (err) {
            console.log(err);
            res.status(400).send({
              Status: "Failed",
              Message: "Can't Register",
              err: err,
            });
          }
        }
        // If password and confirm password not matching
        else {
          res.status(405).send({
            Status: "Failed",
            Message: "Password and Confirm Password doesn't match",
          });
        }
      }
      // If some fields or empty form is submitted then this will be used
      else {
        res
          .status(406)
          .send({ Status: "Failed", Message: "All fields are required" });
      }
    }
  };
}

export default SignupController;
