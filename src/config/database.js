const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('postgres', 'postgres', 'milodev123456', {
    host: 'localhost',
    dialect: 'postgres'
})

module.exports = {sequelize}