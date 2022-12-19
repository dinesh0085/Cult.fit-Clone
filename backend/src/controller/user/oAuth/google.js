"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Orouter = void 0;
const express_1 = __importDefault(require("express"));
const passport_1 = __importDefault(require("passport"));
require("dotenv/config");
const User_1 = __importDefault(require("../../../modules/user/User"));
const mongoose_1 = __importDefault(require("mongoose"));
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const clientID = process.env.GCID || "";
const clientSecret = process.env.GCSC || "";
passport_1.default.use(new GoogleStrategy({
    clientID,
    clientSecret,
    callbackURL: "http://localhost:8080/api/user/google/callback",
    scope: ['profile', 'email']
}, (accessToken, refreshToken, profile, cb) => {
    const user = profile;
    const email = user === null || user === void 0 ? void 0 : user.emails[0].value;
    const name = user === null || user === void 0 ? void 0 : user.name.givenName;
    console.log(email, name);
    if (email && name)
        User_1.default.create({ email, name, password: String(Math.random() * 43548 + "dkh"), tc: true })
            .then(r => {
            console.log(r);
        }).catch(e => {
            if (e instanceof mongoose_1.default.Error.ValidationError)
                console.log(e.message);
        });
    return cb(user);
}));
exports.Orouter = express_1.default.Router();
exports.Orouter.get('/google', passport_1.default.authenticate('google', { scope: ['profile', 'email'] }));
exports.Orouter.get('/google/callback', passport_1.default.authenticate('google', { failureRedirect: '/login', }), function (req, res) {
    // Successful authentication, redirect home.
    res.send("succes");
});
