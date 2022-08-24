
const { sequelize } = require("./config/database")
const { httpServer } = require("./config/http")
require('./config/env')
// require('./schemas/user.schema')
// require('./schemas/product.schema')

const bootStrap = async() => {
    await sequelize.sync().then(()=> console.log('DB esta conectada')).catch(error => console.log(error))
    httpServer.listen(process.env.PORT, ()=>{
        console.log(`Servidor montando en el puerto ${process.env.PORT}`)
    })
}

bootStrap() 

console.clear()