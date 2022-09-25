const { config } = require('dotenv');
const nodemailer = require('nodemailer');
config();

async function sendMail(first, last, email, phone) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: process.env.PORT,
    secure: true, // use SSL
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD2,
    },
  });
  const mailOption = {
    from: process.env.SMTP_USERNAME,
    to: process.env.SMTP_SENDTO,
    subject: 'new client',
    html: `<div>New client info:</div>
    <div>Email : ${email}</div>
    <div>First: ${first}</div>
    <div>Last: ${last}</div>
    <div>Phone: ${phone}</div>`,
  };
  try {
    await transporter.sendMail(mailOption);
    return Promise.resolve('Message Sent Successfully!');
  } catch (error) {
    return Promise.reject(error);
  }
}

async function sendUploadEmail(userInfo, filename, filepath) {
  // console.log(filename, filepath);
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: process.env.PORT,
    secure: true, // use SSL
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD2,
    },
  });
  const mailOption = {
    from: process.env.SMTP_USERNAME,
    to: process.env.SMTP_SENDTO,
    subject: 'new client+attachment',
    html: `<div>New client info:</div>
    <div>Email : ${userInfo.email}</div>
    <div>First: ${userInfo.first}</div>
    <div>Last: ${userInfo.last}</div>
    <div>Phone: ${userInfo.phone}</div>`,
    attachments: [
      {
        filename: filename,
        path: filepath,
        contentType: 'image/png',
      },
    ],
  };
  try {
    await transporter.sendMail(mailOption);
    return Promise.resolve('Message Sent Successfully!');
  } catch (error) {
    return Promise.reject(error);
  }
}

module.exports = { sendMail, sendUploadEmail };
