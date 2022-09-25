const { Router } = require('express');
const {
  userUnregisterController,
  userGetOrderByIdController,
  userGetOrdersController,
  userLoginController,
  userSignupController,
  userUpdateDataController,
} = require('../controllers/users/users.controllers');
// const {
//   userUnregisterController,
// } = require('../controllers/users/user-delete.controller');
// const {
//   userGetOrderByIdController,
// } = require('../controllers/users/user-get-order-by-id.controller');
// const {
//   userGetOrdersController,
// } = require('../controllers/users/user-get-orders.controller');
// const {
//   userLoginController,
// } = require('../controllers/users/user-login.controller');
// const {
//   userSignupController,
// } = require('../controllers/users/user-signup.controller');
// const {
//   userUpdateDataController,
// } = require('../controllers/users/user-update-data.controller');
const { userJWTDTO } = require('../dto/auth-jwt.dto');
const { createUserValidators } = require('../dto/users/userCreateValidatorDTO');
const { orderOfUserExists } = require('../middlewares/Orders.controllers');
const {
  userCredencialsVerify,
  userExistsAndOrders,
  userExistsById,
} = require('../middlewares/Users.middlewares');

const userRouter = Router();

//Crear usuario (recibe username, email, password por req.body)
userRouter.post('/signup', createUserValidators, userSignupController);

//Inicia sesion (recibe email y password por req.body)
userRouter.post('/login', userCredencialsVerify, userLoginController);

//Actualizar pefil de usuario ( solo name y email)
userRouter.patch('/:id', userJWTDTO, userExistsById, userUpdateDataController);

//Deshabilitar cuenta de usuario
userRouter.delete('/:id', userJWTDTO, userExistsById, userUnregisterController);

//Obtener todas las ordenes hechas por el usuario
userRouter.get(
  '/orders',
  userExistsAndOrders,
  userJWTDTO,
  userGetOrdersController
);

//Obtener detalles de una sola orden dado un ID
userRouter.get(
  '/orders/:id',
  userJWTDTO,
  orderOfUserExists,
  userGetOrderByIdController
);

module.exports = { userRouter };
