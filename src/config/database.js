const { Sequelize } = require('sequelize')
require('./env')
const sequelize = new Sequelize('postgres', 'postgres', process.env.DATABASE_KEY_MAIN, {
    host: process.env.DATABASE_URL,
    dialect: 'postgres'
})

module.exports = {sequelize}