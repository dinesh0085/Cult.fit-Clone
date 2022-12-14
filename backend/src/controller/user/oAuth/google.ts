import express, { Request, Response } from "express";
import passport from "passport";
import "dotenv/config";
import UserModel from "../../../modules/user/User";
import mongoose from "mongoose";
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const clientID = process.env.GCID || ""
const clientSecret = process.env.GCSC || ""

passport.use(new GoogleStrategy({
    clientID,
    clientSecret,
    callbackURL: "http://localhost:8080/api/user/google/callback",
    scope: ['profile', 'email']
},
    (accessToken: string, refreshToken: string, profile: any, cb: Function) => {

        const user = profile;
        const email = user?.emails[0].value;
        const name = user?.name.givenName;
        console.log(email, name)
        if (email && name)
            UserModel.create({ email, name, password: String(Math.random() * 43548 + "dkh"), tc: true })
                .then(r => {
                    console.log(r);
                }).catch(e => {
                    if (e instanceof mongoose.Error.ValidationError)
                        console.log(e.message);
                });
        return cb(user);

    }
));

export const Orouter = express.Router();
Orouter.get('/google',

    passport.authenticate('google', { scope: ['profile', 'email'] }));

Orouter.get('/google/callback',
    passport.authenticate('google', { failureRedirect: '/login', }),
    function (req, res) {
        // Successful authentication, redirect home.
        res.send("succes");
    });

