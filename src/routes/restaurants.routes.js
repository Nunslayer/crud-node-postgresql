const {Router} = require('express')

//**ESPECIFICACIONES GENERALES DE LA RUTA */
//Todas las rutas, excepto GET / y /:id, deben estar protegidas por un metodo de autentificacion. Se debe incluir las reseñas de los restaurants.
//El endpoint para crear restaurants, debe estar protegido con express-validator.
//Los endpoints PATCH /:id y DELETE/:id deben estar protegidos para que unicamente el usuario admin pueda realizar estas acciones.
const restaurantsRouter = Router()

//Crear un nuevo restaurant (enviar name, address, rating (INT))
restaurantsRouter.post('/',)

//Obtener todos los restaurants con status active
restaurantsRouter.get('/',)

//Obtener restaurant por ID
restaurantsRouter.get('/:id',)

//Actualizar restaurant (name, address) UNICAMENTE EL ADMIN PUEDE REALIZAR ESTA ACCION
restaurantsRouter.patch('/:id',)

//Deshabilitar restaurant UNICAMENTE EL ADMIN PUEDE REALIZAR ESTA ACCION
restaurantsRouter.delete('/:id',)

//crear una nueva reseña en el restaurant, siendo restaurant Id el id del restaurant (enviar comment, rating (INT) en req.body)
restaurantsRouter.post('/reviews/:restaurantId',)

// Actualizar una reseña hecha en un restaurant, siendo :id el id de la reseña (comment, rating) SOLO EL AUTOR DE LA RESEÑA PUEDE ACTUALIZAR SU PROPIA RESEÑA
restaurantsRouter.patch('/reviews/:id', )

//Actualizar una reseña hecha en un restaurant a status deleted, siendo  :id el id de la reseña. SOLO EL AUTOR DE LA RESEÑA PUEDE ACTUALIZAR SU PROPIA RESEÑA
restaurantsRouter.delete('/reviews/:id', )

module.exports = {restaurantsRouter}