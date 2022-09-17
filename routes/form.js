const express = require('express');
const router = express();
const sendMail = require('../utils/sendmail.js');

router.get('/', (req, res, next) => {
  res.render('form');
});

router.post('/', (req, res, next) => {
  const { first, last, phone, email } = req.body;
  sendMail(first, last, email, phone);
  res.redirect('/');
});

module.exports = router;
