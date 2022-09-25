const { body } = require('express-validator');
const { User } = require('../../models/user.model');
const { checkValidations } = require('../../utils/cheackValidations');
const createUserValidators = [
  body('name')
    .isString()
    .withMessage('Name must be a string')
    .notEmpty()
    .withMessage('Name cannot be empty')
    .isLength({ min: 3 })
    .withMessage('Name must be at least 3 characters'),
  body('email')
    .isEmail()
    .withMessage('Must provide a valid email')
    .custom((value) => {
      return User.findOne({ where: { email: value } }).then((user) => {
        if (user) {
          return Promise.reject('E-mail already in use');
        }
      });
    }),
  body('password')
    .isString()
    .withMessage('Password mus be a string')
    .notEmpty()
    .withMessage('Password cannot be empty')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters'),
  checkValidations,
];

module.exports = {
  createUserValidators,
};
