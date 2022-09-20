const express = require('express');
const router = express();
const sendMail = require('../utils/sendmail.js');
const { body, validationResult } = require('express-validator');

router.get('/', (req, res, next) => {
  res.render('form');
});

router.post('/', [
  body('first', 'first name is required').trim().isLength({ min: 1 }).escape(),
  body('last', 'last name is required').trim().isLength({ min: 1 }).escape(),
  body('phone', 'phone number is invalid')
    .trim()
    .isLength({ min: 9 })
    .isMobilePhone()
    .escape(),
  body('email', 'email is invalid')
    .trim()
    .isLength({ min: 3 })
    .isEmail()
    .escape(),
  (req, res, next) => {
    const errors = validationResult(req);
    const { first, last, phone, email } = req.body;
    // there are errors
    if (!errors.isEmpty()) {
      res.render('form', {
        first,
        last,
        phone,
        email,
        errors: errors.array({ onlyFirstError: true }),
      });
      return;
    }
    global.userInfo = { first, last, email, phone };
    sendMail(first, last, email, phone);
    res.redirect('/upload');
  },
]);

module.exports = router;
