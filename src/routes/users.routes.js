const {Router} = require('express')

//**ESPECIFICACIONES GENERALES DE LA RUTA */
//Todas las rutas, excepto para crear usuario e iniciar sesion, se deben proteger por un medio de autentificacion, es decir, por JWT.
//El endpoint /orders y /orders/:id, debe buscar las ordenes del usuario en sesion (del token que se envio), extraer el id del token y usarlo para buscar dichas ordenes.
//Los metodos PATCH y DELETE deben estar protegidos para que unicamente el dueño de la cuenta a modificar pueda realizar dichas acciones.
//Para los endpoints /orders, se debe incluir la siguiente informacion: 
        //El restaurant de donde se pidio la comida
const userRouter = Router()

//Crear usuario (recibe username, email, password por req.body)
userRouter.post('/signup', )

//Inicia sesion (recibe email y password por req.body)
userRouter.post('/login', )

//Actualizar pefil de usuario ( solo name y email)
userRouter.patch('/:id', )

//Deshabilitar cuenta de usuario 
userRouter.delete('/:id', )

//Obtener todas las ordenes hechas por el usuario
userRouter.get('/orders', )

//Obtener detalles de una sola orden dado un ID
userRouter.get('/orders/:id', )

module.exports = {userRouter}