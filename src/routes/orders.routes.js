const {Router} = require('express')

//**ESPECIFICACIONES GENERALES DE LA RUTA */
//Todas las rutas deben estar protegidas por un metodo de autentificacion.
//Para el endpoint POST / se debe realizar lo siguiente:
    //Se debe buscar si existe la comida (meal), si no, enviar error.
    //Calcular el precio para el usuario, multiplicar el precio de la comida (meal) encontrada previamente, por la cantidad solicitada por el usuario.
    //Crear una nueva orden, pasando el precio calculado, el mealId de la comida ya encontrada y la cantidad solicitada por el usuario.
//Para el endopoint PATCH y DELETE, validar que la orden este con status active antes de realizar la operacion, enviar error en caso de que no tenga este status.
    //Solo el usuario que hizo la orden puede realizar estas operaciones.
//Para el endpoint /me, se debe incluir la informacion de la comida que se ordeno, y del restaurant de donde se pidio la comida.

const ordersRouter = Router()

//Crear una nueva order (enviar quantity y mealId por req.body)
ordersRouter.post('/', )

//Obtener todas las ordenes del usuario
ordersRouter.get('/me', )

//Marcar una orden por id con status completed
ordersRouter.patch('/:id', )

//Marcar una orden por id con status cancelled
ordersRouter.delete('/:id', )

module.exports = {ordersRouter}