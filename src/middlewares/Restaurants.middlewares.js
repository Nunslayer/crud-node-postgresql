const { Restaurant } = require('../models/restaurant.model');

const restaurantExists = async (req, res, next) => {
  const restaurantId = Number(req.params.restaurantId) || Number(req.params.id);
  const restaurant = await Restaurant.findOne({
    where: {
      id: restaurantId,
    },
  });
  if (!restaurant)
    return res.status(404).json({
      status: 'error',
      message: 'Restaurant not found',
    });
  req.restaurant = restaurant;
  next();
};

module.exports = { restaurantExists };
