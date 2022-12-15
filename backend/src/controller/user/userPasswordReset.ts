import "dotenv/config";
import { Request, Response } from "express";
import jwt, { Secret } from "jsonwebtoken";
import UserModel from "../../modules/user/User";
import bcrypt from "bcrypt";
import transporter from "../../config/emailConfig";
const secretKey = process.env.JWT_SECRET_KEY;

class userPasswordReset {
  static sendUserPasswordResetEmail = async (req: Request, res: Response) => {
    const { email } = req.body;

    // For restting email checking if email is there
    if (email) {
      const user = await UserModel.findOne({ email: email });

      // Checking if user exists in database
      if (user) {
        // Here we are creating a secret key for that particular user, it's same like as we are generating when the user logs in
        const secret = `${user?._id}${secretKey}`;
        // Generating a token which is valid for 15 minutes
        const token = jwt.sign({ userID: user._id }, secret, {
          expiresIn: "15m",
        });
        // Creating a link for particular user which will be valid for 15 min because the token will expire after 15 minutes
        const link = `http:127.0.0.0.1:3000/api/user/reset/${user._id}/${token}`;

        let info = await transporter.sendMail({
          from: process.env.EMAIL_FROM, // From my email
          to: user.email, // User email in which the password reset link will be sent
          subject: "Cure & Fit password reset link",
          html: `<h4>Hello ${
            user.name
          }, ${"\n"} <a href=${link}>Click Here</a> to reset your password</h4>`,
        });
        res.send({
          Status: "Success",
          Message: "Email sent success",
          Info: info,
        });
      }
      // If user not exists in database
      else {
        res.send({ Status: "Failed", Message: "Email doesn't exists" });
      }
    }
    // Email is not there
    else {
      res.send({
        Status: "Failed",
        Message: "Please fill the required fields",
      });
    }
  };

  static userPasswordReset = async (req: Request, res: Response) => {
    const { password, password_confirmation } = req.body;
    // Getting this id and token from the params of the url(dynamic routing). Please check the userRoutes.ts to understand more
    const { id, token } = req.params;
    // Finding user
    const user = await UserModel.findById(id);
    // This new secret is same as created at the time when the email send request was made. See above function
    const newSecret = `${user?._id}${secretKey}`;
    try {
      // Verifying both the tokens here
      jwt.verify(token, newSecret);
      // Checking passowrd and confirm password is there
      if (password && password_confirmation) {
        // If the password is not equal to confirm password
        if (password !== password_confirmation) {
          res.send({
            status: "Failed",
            message: "Password & confirm password doesn't match",
          });
        }
        // If passowrd and confirm password is equal
        else {
          const salt = await bcrypt.genSalt(14);
          const newHashPassword = await bcrypt.hash(password, salt);
          // Changing password here
          await UserModel.findByIdAndUpdate(user?._id, {
            $set: { password: newHashPassword },
          });
          res.send({
            status: "Success",
            message: "Password changed successfully",
          });
        }
      }
      // If required fields are empty
      else {
        res.send({ Status: "Failed", Message: "All fields are required" });
      }
    } catch (err) {
      res.send({
        Status: "Failed",
        Message: "All fields are required",
        error: err,
      });
    }
  };
}

export default userPasswordReset;
