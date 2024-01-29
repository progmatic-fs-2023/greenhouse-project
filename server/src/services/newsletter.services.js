import nodemailer from 'nodemailer';
import 'dotenv/config';

const transporter = nodemailer.createTransport({
  host: 'smtp-mail.outlook.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAILUSERNAME,
    pass: process.env.EMAILPASSWORD,
  },
});

export default async (text) => {
    const newsletterMailOptions = {
      from: process.env.EMAILUSERNAME,
      to: 'esztersari66@gmail.com',
      subject: `Thank you for subscribing to our newsletter!`,
      text: `${text}`,
    };
  
    try {
      const info = await transporter.sendMail(newsletterMailOptions);
      console.log(`Email sent: ${info.response}`);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };
  