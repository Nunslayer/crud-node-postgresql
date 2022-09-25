const { Router } = require('express');
const {
  mealCreatedController,
  mealGetAllController,
  mealGetByIdController,
  mealUpdateDataController,
  mealDeleteController,
} = require('../controllers/meals/meals.controllers');
const { userJWTDTO } = require('../dto/auth-jwt.dto');

const mealsRouter = Router();

// Crear una nueva comida en el restaurant, siendo :id el id del restaurant ( enviar name, price (INT) en req.body)
mealsRouter.post('/:id', userJWTDTO, mealCreatedController);

//Obtener todas las comidas con status active
mealsRouter.get('/', mealGetAllController);

//Obtener por id una comida con status active
mealsRouter.get('/:id', mealGetByIdController);

//Actualizar comida (name, price) UNICAMENTE EL ADMIN PUEDE REALIZAR ESTA ACCION
mealsRouter.patch('/:id', userJWTDTO, mealUpdateDataController);

//Deshabilitar comida UNICAMENTE EL ADMIN PUEDE REALIZAR ESTA ACCION
mealsRouter.delete('/:id', userJWTDTO, mealDeleteController);

module.exports = { mealsRouter };
