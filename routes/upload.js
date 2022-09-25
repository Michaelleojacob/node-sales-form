const express = require('express');
const router = express();
const userinfo = require('../globals/userInfo.js');
const fs = require('fs');
const { sendUploadEmail } = require('../utils/sendmail.js');
const multer = require('multer');
const upload = multer({ dest: `./uploads` });

router.get('/', (req, res, next) => {
  res.render('upload');
});

router.post('/', upload.single('filename'), async (req, res) => {
  await sendUploadEmail(
    userinfo.getValues(),
    req.file.originalname,
    `${__dirname}/../${req.file.path}`
  );
  fs.unlink(`${__dirname}/../${req.file.path}`, (err) => {
    if (err) console.log(err);
  });
  res.redirect('thankyou');
  // res.redirect('/upload');
});

module.exports = router;
