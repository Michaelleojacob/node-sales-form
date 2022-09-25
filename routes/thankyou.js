const express = require('express');
const thankyouRouter = express();
const userinfo = require('../globals/userInfo.js');

thankyouRouter.get('/', (req, res) => {
  res.render('thankyou', { name: userinfo.first });
});

module.exports = thankyouRouter;
