const express = require('express');
const router = express();

router.get('/', (req, res, next) => {
  res.render('form');
});

router.post('/', (req, res, next) => {
  const { first, last, phone, email } = req.body;
  console.log(first, last, phone, email);
  res.redirect('/');
});

module.exports = router;
