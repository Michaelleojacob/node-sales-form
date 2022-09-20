const express = require('express');
const router = express();

router.get('/', (req, res, next) => {
  res.render('upload');
});

router.post('/post', (req, res, next) => {
  console.log(global.userInfo);
  res.render('form');
});

module.exports = router;
