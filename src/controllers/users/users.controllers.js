const { User } = require('../../models/user.model');
const { Order } = require('../../models/order.model');
const { compare, hash } = require('bcrypt');
const { SignJWT } = require('jose');

const userUnregisterController = async (req, res) => {
  try {
    const { user } = req;
    await user.update({ status: 'inactive' });
    res.status(204).json({
      status: 'success',
      message: 'User is Deleted',
    });
  } catch (error) {
    console.log(error);
  }
};

const userGetOrderByIdController = async (req, res) => {
  try {
    const { order } = req;
    res.status(200).send(order);
  } catch (error) {
    console.log(error);
  }
};

const userGetOrdersController = async (req, res) => {
  try {
    const { user } = req;
    res.status(200).send(user);
  } catch (error) {
    console.log(error);
  }
};

const userLoginController = async (req, res) => {
  try {
    const { user } = req;
    const jwtConstructor = new SignJWT({
      id: user.id,
      role: user.role,
      status: user.status,
    });

    const encoder = new TextEncoder();
    const jwt = await jwtConstructor
      .setProtectedHeader({
        alg: 'HS256',
        typ: 'JWT',
      })
      .setIssuedAt()
      .setExpirationTime('7d')
      .sign(encoder.encode(process.env.PRIVATE_KEY_JWT));
    return res.status(200).send({ jwt });
  } catch (error) {
    console.log(error);
  }
};

const userSignupController = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await hash(password, 12);
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    return res.status(201).json({
      status: 'success',
      message: 'success user register process',
      data: { newUser },
    });
  } catch (error) {
    console.log(error);
  }
};

const userUpdateDataController = async (req, res) => {
  try {
    const { user } = req;
    const { email, name } = req.body;
    await user.update({ name, email });
    res.status(200).json({
      status: 'success',
      data: { user },
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  userUnregisterController,
  userGetOrderByIdController,
  userGetOrdersController,
  userLoginController,
  userSignupController,
  userUpdateDataController,
};
