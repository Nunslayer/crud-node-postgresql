const { Review } = require('../models/review.model');

const reviewExistsById = async (req, res, next) => {
  try {
    const reviewId = Number(req.params.id);
    const review = await Review.findOne({
      where: {
        id: reviewId,
      },
    });
    if (!review)
      return res.status(404).json({
        status: 'error',
        message: 'Review not found',
      });
    req.review = review;
    req.params.id = review.restaurantId;
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { reviewExistsById };
