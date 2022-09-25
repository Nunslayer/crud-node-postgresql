const { Order } = require('../models/order.model');
const { User } = require('../models/user.model');

const orderOfUserExists = async (req, res, next) => {
  try {
    const { id } = req;
    const orderId = Number(req.params.id);
    const order = await Order.findOne({
      include: {
        model: User,
      },
      where: {
        id: orderId,
        userId: id,
      },
    });
    if (!order)
      return res.status(404).json({
        status: 'error',
        message: 'Resource not found',
      });
    req.order = order;
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { orderOfUserExists };
