const { Router } = require('express');
const {
  restaurantDeleteController,
  restaurantCreateController,
  restaurantDeleteReviewController,
  restaurantGetAllController,
  restaurantGetByIdController,
  restaurantCreateReviewController,
  restaurantUpdateDataController,
  restaurantUpdateReviewController,
} = require('../controllers/restaurants/restaurants.controllers');
const { userJWTDTO } = require('../dto/auth-jwt.dto');
const {
  restaurantCreateValidators,
} = require('../dto/restaurants/restaurantCreateValidatorsDTO');
const { restaurantExists } = require('../middlewares/Restaurants.middlewares');
const { reviewExistsById } = require('../middlewares/Reviews.middlewares');

const restaurantsRouter = Router();

//Crear un nuevo restaurant (enviar name, address, rating (INT))
restaurantsRouter.post(
  '/',
  restaurantCreateValidators,
  userJWTDTO,
  restaurantCreateController
);

//Obtener todos los restaurants con status active
restaurantsRouter.get('/', restaurantGetAllController);

//Obtener restaurant por ID
restaurantsRouter.get('/:id', restaurantExists, restaurantGetByIdController);

//Actualizar restaurant (name, address) UNICAMENTE EL ADMIN PUEDE REALIZAR ESTA ACCION
restaurantsRouter.patch(
  '/:id',
  userJWTDTO,
  restaurantExists,
  restaurantUpdateDataController
);

//Deshabilitar restaurant UNICAMENTE EL ADMIN PUEDE REALIZAR ESTA ACCION
restaurantsRouter.delete(
  '/:id',
  userJWTDTO,
  restaurantExists,
  restaurantDeleteController
);

//crear una nueva reseña en el restaurant, siendo restaurant Id el id del restaurant (enviar comment, rating (INT) en req.body)
restaurantsRouter.post(
  '/reviews/:restaurantId',
  userJWTDTO,
  restaurantExists,
  restaurantCreateReviewController
);

// Actualizar una reseña hecha en un restaurant, siendo :id el id de la reseña (comment, rating) SOLO EL AUTOR DE LA RESEÑA PUEDE ACTUALIZAR SU PROPIA RESEÑA
restaurantsRouter.patch(
  '/reviews/:id',
  userJWTDTO,
  reviewExistsById,
  restaurantExists,
  restaurantUpdateReviewController
);

//Actualizar una reseña hecha en un restaurant a status deleted, siendo  :id el id de la reseña. SOLO EL AUTOR DE LA RESEÑA PUEDE ACTUALIZAR SU PROPIA RESEÑA
restaurantsRouter.delete(
  '/reviews/:id',
  userJWTDTO,
  reviewExistsById,
  restaurantExists,
  restaurantDeleteReviewController
);

module.exports = { restaurantsRouter };
