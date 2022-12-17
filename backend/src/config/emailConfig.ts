import "dotenv/config";
import nodemailer from "nodemailer";
import smtpTransport from "nodemailer-smtp-transport";

let transporter = nodemailer.createTransport(
  smtpTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER, // generated gmail user
      pass: process.env.EMAIL_PASS, // generated gmail password
    },
  })
);

export default transporter;
