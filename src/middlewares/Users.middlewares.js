const { compare } = require('bcrypt');
const { Order } = require('../models/order.model');
const { User } = require('../models/user.model');

const userExistsById = async (req, res, next) => {
  try {
    const { id } = req;
    const user = await User.findOne({
      where: {
        id,
      },
    });
    if (!user)
      return res.status(404).json({
        status: 'error',
        message: 'Resource not found',
      });
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
  }
};
const userExistsAndOrders = async (req, res, next) => {
  try {
    const { id } = req;
    const user = await User.findOne({
      include: {
        model: Order,
      },
      where: {
        id,
      },
    });
    if (!user)
      return res.status(404).json({
        status: 'error',
        message: 'Resource not found',
      });
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
  }
};

const userCredencialsVerify = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({
      where: {
        email,
      },
    });
    if (!user)
      return res.status(401).json({
        status: 'error',
        message: 'Unauthorized',
      });
    const checkPassword = await compare(password, user.password);
    if (!checkPassword)
      return res.status(401).json({
        status: 'error',
        message: 'Unauthorized',
      });
    if (user.status === 'inactive')
      return res.status(403).json({
        status: 'error',
        message:
          'Your account status is inactive, please go to active your account',
      });
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { userExistsById, userExistsAndOrders, userCredencialsVerify };
