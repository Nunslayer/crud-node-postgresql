const { db } = require('../../config/database');
const { Meal } = require('../../models/meal.model');
const { Restaurant } = require('../../models/restaurant.model');
const { Review } = require('../../models/review.model');

const ratingAVG = async (id) => {
  return await Review.findAll({
    attributes: [[db.fn('AVG', db.col('rating')), 'avgRating']],
    where: {
      restaurantId: id,
      status: 'active',
    },
  });
};

const restaurantCreateController = async (req, res) => {
  try {
    const { name, address } = req.body;
    const restaurant = await Restaurant.create({
      name,
      address,
    });
    res
      .status(201)
      .json({ status: 'Succesfull created at restaurant', data: restaurant });
  } catch (error) {
    console.log(error);
  }
};

const restaurantDeleteReviewController = async (req, res) => {
  try {
    const { id, review, restaurant } = req;
    if (review.userId !== id)
      return res.status(401).json({
        status: 'error',
        message: 'Unauthorized',
      });
    await review.update({ status: 'deleted' });
    const ratingAverage = await ratingAVG(restaurant.id);
    await restaurant.update({
      rating: Number.parseFloat(ratingAverage[0].toJSON().avgRating).toFixed(1),
    });
    res.status(204).json({
      status: 'success',
      message: 'Success deleted review',
    });
  } catch (error) {
    console.log(error);
  }
};

const restaurantDeleteController = async (req, res) => {
  try {
    const { status, restaurant } = req;
    if (status !== 'admin')
      return res.status(403).json({
        status: 'error',
        message: 'Invalid Credentials',
      });
    await restaurant.update({ status: false });
    res.status(204).json({
      status: 'success',
      message: 'Restaurant is deleted',
    });
  } catch (error) {
    console.log(error);
  }
};

const restaurantGetAllController = async (req, res) => {
  try {
    const restaurants = await Restaurant.findAll({
      include: [Review, Meal],
      where: {
        status: 'active',
      },
    });
    res.status(200).json({
      status: 'success',
      data: { restaurants },
    });
  } catch (error) {
    console.log(error);
  }
};

const restaurantGetByIdController = async (req, res) => {
  try {
    const id = req.restaurant.id;
    const restaurant = await Restaurant.findOne({
      include: [Review, Meal],
      where: {
        id,
      },
    });
    res.status(200).json({
      status: 'success',
      data: { restaurant },
    });
  } catch (error) {
    console.log(error);
  }
};

const restaurantCreateReviewController = async (req, res) => {
  try {
    const { id, restaurant } = req;
    const { comment, rating } = req.body;
    await Review.create({
      comment,
      rating,
      restaurantId: restaurant.id,
      userId: id,
    });
    const ratingAverage = await ratingAVG(restaurant.id);
    await restaurant.update({
      rating: Number.parseFloat(ratingAverage[0].toJSON().avgRating).toFixed(1),
    });
    res.status(201).json({
      status: 'Succesfull create review',
      data: { restaurant },
    });
  } catch (error) {
    console.log(error);
  }
};

const restaurantUpdateDataController = async (req, res) => {
  try {
    const { status, restaurant } = req;
    const { name, address } = req.body;
    if (status !== 'admin')
      return res.status(403).json({
        status: 'error',
        message: 'Invalid Credentials',
      });
    await restaurant.update({
      name,
      address,
    });
    res.status(200).json({
      status: 'success',
      data: restaurant,
    });
  } catch (error) {
    console.log(error);
  }
};

const restaurantUpdateReviewController = async (req, res) => {
  try {
    const { id, review, restaurant } = req;
    const { comment, rating } = req.body;
    if (review.userId !== id)
      return res.status(403).json({
        status: 'error',
        message: 'Unauthorized',
      });
    await review.update({
      comment,
      rating,
    });
    const ratingAverage = await ratingAVG(restaurant.id);
    await restaurant.update({
      rating: Number.parseFloat(ratingAverage[0].toJSON().avgRating).toFixed(1),
    });
    res.status(201).json({
      status: 'success',
      message: 'Succesfull update review',
      data: { restaurant },
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  restaurantDeleteController,
  restaurantCreateController,
  restaurantDeleteReviewController,
  restaurantGetAllController,
  restaurantGetByIdController,
  restaurantCreateReviewController,
  restaurantUpdateDataController,
  restaurantUpdateReviewController,
};
