const express = require('express');
const formRouter = express();
const fs = require('fs');
const { sendUploadEmail, sendMail } = require('../utils/sendmail.js');
const { body, validationResult } = require('express-validator');
const multer = require('multer');
const upload = multer({ dest: './uploads' });
const validateForm = require('../validators/form.js');

formRouter.get('/', (req, res, next) => {
  res.render('form');
});

formRouter.post(
  '/',
  upload.single('filename'),
  validateForm,
  async (req, res, next) => {
    const errors = validationResult(req);
    const { first, last, phone, email } = req.body;
    // there are errors
    if (!errors.isEmpty()) {
      const filtered = errors
        .array()
        .filter((item) => item.msg !== 'Invalid value');

      return res.render('form', {
        first,
        last,
        phone,
        email,
        errors: filtered,
      });
    }
    if (req.file) {
      await sendUploadEmail(
        first,
        last,
        phone,
        email,
        req.file.originalname,
        `${__dirname}/../${req.file.path}`
      );
      fs.unlink(`${__dirname}/../${req.file.path}`, (err) => {
        if (err) console.log(err);
      });
      return res.render('thankyou', { name: first });
    }
    await sendMail(first, last, phone, email);
    return res.render('thankyou', { name: first });
  }
);

module.exports = formRouter;
