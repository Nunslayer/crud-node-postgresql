const { validationResult } = require("express-validator");

const checkValidations = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errorMessages = errors.array().map((err) => {
        return err.msg;
      });
      const message = errorMessages.join('. ');
      return res.status(400).json({
        status: 'error',
        message,
      });
    }
    next();
};

module.exports = {checkValidations}