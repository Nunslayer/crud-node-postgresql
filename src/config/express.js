const express = require('express')
const morgan = require('morgan')
const { mealsRouter } = require('../routes/meals.routes')
const { ordersRouter } = require('../routes/orders.routes')
const { restaurantsRouter } = require('../routes/restaurants.routes')
const { userRouter } = require('../routes/users.routes')
const app = express()
//Static Middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(express.text())
//**Routes */
//Router user
app.use('/api/v1/users', userRouter)
//Router restaurants
app.use('/api/v1/restaurants', restaurantsRouter)
//Router meals
app.use('/api/v1/meals', mealsRouter)
//Router orders
app.use('/api/v1/orders', ordersRouter)
module.exports = {app}