const { Meal } = require('../../models/meal.model');
const { Order } = require('../../models/order.model');
const { Restaurant } = require('../../models/restaurant.model');

const orderCreateController = async (req, res) => {
  try {
    const userId = Number(req.id);
    const { mealId, quantity } = req.body;
    const meal = await Meal.findOne({ where: { id: mealId } });
    if (!meal) return res.status(401).send('That meal is not exists');
    await Order.create({
      totalPrice: Number(quantity) * Number(meal.price),
      quantity,
      userId,
      mealId,
    });
    res.status(201).send('Your order at created succesfull');
  } catch (error) {
    console.log(error);
  }
};

const orderDeleteController = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const order = await Order.findOne({
      where: {
        id,
      },
    });
    if (!order) return res.status(401).send('Thats order dont exists');
    if (order.status !== 'active')
      return res.status(401).send(`Thats order is ${order.status}`);
    order.status = 'cancelledd';
    await order.save();
    res.status(200).send('Succesfull that order is mark like cancelledd');
  } catch (error) {
    console.log(error);
  }
};

const orderGetAllController = async (req, res) => {
  try {
    const { id } = req;
    const orders = await Order.findAll({
      include: {
        model: Meal,
        include: {
          model: Restaurant,
        },
      },
      where: {
        userId: id,
      },
    });
    res.status(200).send(orders);
  } catch (error) {
    console.log(error);
  }
};
const orderUpdateStatusController = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const order = await Order.findOne({
      where: {
        id,
      },
    });
    if (!order) return res.status(401).send('Thats order dont exists');
    if (order.status !== 'active')
      return res.status(401).send(`Thats order is ${order.status}`);
    order.status = 'completed';
    await order.save();
    res.status(200).send('Succesfull that order is mark like completed');
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  orderCreateController,
  orderDeleteController,
  orderGetAllController,
  orderUpdateStatusController,
};
