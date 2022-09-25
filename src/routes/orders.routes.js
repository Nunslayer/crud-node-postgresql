const { Router } = require('express');
const {
  orderCreateController,
  orderGetAllController,
  orderUpdateStatusController,
  orderDeleteController,
} = require('../controllers/orders/orders.controller');
const { userJWTDTO } = require('../dto/auth-jwt.dto');

const ordersRouter = Router();

//Crear una nueva order (enviar quantity y mealId por req.body)
ordersRouter.post('/', userJWTDTO, orderCreateController);

//Obtener todas las ordenes del usuario
ordersRouter.get('/me', userJWTDTO, orderGetAllController);

//Marcar una orden por id con status completed
ordersRouter.patch('/:id', userJWTDTO, orderUpdateStatusController);

//Marcar una orden por id con status cancelled
ordersRouter.delete('/:id', userJWTDTO, orderDeleteController);

module.exports = { ordersRouter };
