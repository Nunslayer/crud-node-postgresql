const { body } = require('express-validator');
const { checkValidations } = require('../../utils/cheackValidations');
const { Restaurant } = require('../../models/restaurant.model');

const restaurantCreateValidators = [
  body('name')
    .isString()
    .withMessage('Name must be a string')
    .notEmpty()
    .withMessage('Name cannot be empty')
    .isLength({ min: 4 })
    .withMessage('Name must be at least 4 characters')
    .custom((value) => {
      return Restaurant.findOne({ where: { name: value } }).then((rest) => {
        if (rest) {
          return Promise.reject(`Name ${value} already in use`);
        }
      });
    }),
  body('address')
    .isString()
    .withMessage('Address must be a string')
    .notEmpty()
    .withMessage('Address cannot be empty')
    .isLength({ min: 5 })
    .withMessage('Address must be at least 5 characters'),
  body('rating')
    .isInt({ min: 1, max: 5 })
    .withMessage('rating must be a number on range 1 - 5'),
  checkValidations,
];
module.exports = {
  restaurantCreateValidators,
};
