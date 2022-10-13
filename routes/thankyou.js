const express = require('express');
const thankyouRouter = express();

thankyouRouter.get('/', (req, res) => {
  res.render('thankyou');
});

module.exports = thankyouRouter;
