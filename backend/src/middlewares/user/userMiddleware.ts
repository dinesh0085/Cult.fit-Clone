import jwt, { JwtPayload, Secret } from "jsonwebtoken";
import UserModel from "../../modules/user/User";
import "dotenv/config";
import { Response, Request, NextFunction } from "express";
// import { CustomRequest } from "./userMiddleware";
const secretKey: Secret = process.env.JWT_SECRET_KEY || "";

export interface CustomRequest extends Request {
  token: string | JwtPayload;
  userID: string;
  iat: number;
  exp: number;
}
var checkUserAuth = async (req: Request, res: Response, next: NextFunction) => {
  let token;
  const { authorization } = req.headers;
  // !! Keep in mind to add "Bearer" before token
  if (authorization && authorization.startsWith("Bearer")) {
    try {
      // Getting token from header
      token = authorization.split(" ")[1];

      // Verifying Token
      const { userID } = jwt.verify(token, secretKey) as CustomRequest;

      // Saving the token for the user so that we can access the user information from the token
      (req as CustomRequest).token = userID;

      // If everything above is good the will pass the next
      next();
    } catch (err) {
      // Token is there but user not authorized
      res.send({
        Status: "Failed",
        Message: "Unauthorised User",
      });
    }
  }
  // There is no token
  if (!token) {
    res.send({
      Status: "Failed",
      Message: "Unauthorised User, No Token",
    });
  }
};

export default checkUserAuth;
