const {Router} = require('express')

//**ESPECIFICACIONES GENERALES DE LA RUTA */
//Todas las rutas, excepto GET / y /:id, deben estar protegidas por un metodo de autenticacion.
//El endpoint para crear comidas, debe estar protegido con express-validator.
//Los metodos PATCH y DELETE deben estar protegidos para que unicamente el usuario admin pueda realizar estas acciones.
//Para los endpoints GET, se debe incluir la informacion de su restaurant.
const mealsRouter = Router()

// Crear una nueva comida en el restaurant, siendo :id el id del restaurant ( enviar name, price (INT) en req.body)
mealsRouter.post('/:id', )

//Obtener todas las comidas con status active
mealsRouter.get('/', )

//Obtener por id una comida con status active
mealsRouter.get('/:id', )

//Actualizar comida (name, price) UNICAMENTE EL ADMIN PUEDE REALIZAR ESTA ACCION
mealsRouter.patch('/:id', ) 

//Deshabilitar comida UNICAMENTE EL ADMIN PUEDE REALIZAR ESTA ACCION
mealsRouter.delete('/:id', )

module.exports = {mealsRouter}