const { body, check, validationResult } = require('express-validator');

const validateForm = [
  check('first')
    .trim()
    .escape()
    .notEmpty()
    .isLength({ min: 1 })
    .withMessage('first name is invalid'),
  check('last')
    .trim()
    .escape()
    .notEmpty()
    .isLength({ min: 1 })
    .withMessage('last name is invalid'),
  check('phone')
    .trim()
    .escape()
    .notEmpty()
    .isLength({ min: 9, max: 12 })
    .withMessage('phone number is invalid'),
  check('email')
    .trim()
    .escape()
    .notEmpty()
    .isEmail()
    .isLength({ min: 1 })
    .withMessage('email is invalid'),
  (req, res, next) => next(),
];

module.exports = validateForm;
