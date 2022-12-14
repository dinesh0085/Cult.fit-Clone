import jwt, { JwtPayload, Secret } from "jsonwebtoken";
import UserModel from "../../modules/user/User";
import "dotenv/config";
import { Response, Request } from "express";
const secretKey: Secret = process.env.JWT_SECRET_KEY || "";

var checkUserAuth = async (req: Request, res: Response) => {
  let token;
  const { authorization } = req.headers;
  if (authorization && authorization.startsWith("Bearer")) {
    try {
      token = authorization.split(" ")[1];

      // Verifying Token
      const user = jwt.verify(token, secretKey);
      let userId;
      if (typeof user !== "string") {
        userId = user.userId;
      }
    } catch (err) {
      console.log(err);
    }
  }
};
