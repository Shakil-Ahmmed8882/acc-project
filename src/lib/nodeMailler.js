import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "mail.bismillahchinese.com",
  port: 465,
  secure: true,
  auth: {
    user: "bismilla",
    pass: "Hasan@1980",
  },
});
