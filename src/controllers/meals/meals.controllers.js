const { Meal } = require('../../models/meal.model');
const { Restaurant } = require('../../models/restaurant.model');

const mealCreatedController = async (req, res) => {
  try {
    const { name, price } = req.body;
    const restaurantId = Number(req.params.id);
    const restaurant = await Restaurant.findOne({
      where: {
        id: restaurantId,
      },
    });
    if (!restaurant)
      return res.status(401).send('thats restaurant dont exists');
    await Meal.create({
      name,
      price,
      restaurantId,
    });
    res.status(201).send('Meal is created succesfull');
  } catch (error) {
    console.log(error);
  }
};

const mealDeleteController = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const meal = await Meal.findOne({
      where: {
        id,
      },
    });
    if (!meal) return res.status(401).send('That meal dont exists');
    meal.status = false;
    await meal.save();
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
  }
};

const mealGetAllController = async (req, res) => {
  try {
    const meals = await Meal.findAll({
      include: {
        model: Restaurant,
      },
    });
    res.status(200).send(meals);
  } catch (error) {
    console.log(error);
  }
};

const mealGetByIdController = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const meal = await Meal.findOne({
      include: {
        model: Restaurant,
      },
      where: {
        id,
      },
    });
    if (!meal) return res.status(401).send('That meal dont exists');
    res.status(200).send(meal);
  } catch (error) {
    console.log(error);
  }
};

const mealUpdateDataController = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const { name, price } = req.body;
    const meal = await Meal.findOne({
      include: {
        model: Restaurant,
      },
      where: {
        id,
      },
    });
    if (!meal) return res.status(401).send('That meal dont exists');
    meal.name = name;
    meal.price = price;
    await meal.save();
    res.status(200).send(meal);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  mealCreatedController,
  mealDeleteController,
  mealGetAllController,
  mealGetByIdController,
  mealUpdateDataController,
};
