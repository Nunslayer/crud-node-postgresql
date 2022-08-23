const { httpServer } = require("./settings/http")
require('./settings/env')


const bootStrap = () => {
    httpServer.listen(process.env.PORT, ()=>{
        console.log(`Servidor montando en el puerto ${process.env.PORT}`)
    })
}

bootStrap()

console.clear()