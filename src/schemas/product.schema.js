const { DataTypes } = require('sequelize')
const { sequelize } = require('../config/database')
const Product = sequelize.define('products', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    productType: {
        type: DataTypes.STRING
    },
    discipline: {
        type: DataTypes.STRING
    },
    stamp: {
        type: DataTypes.STRING
    },
    images: {
        type: DataTypes.ARRAY(DataTypes.STRING)
    }
})

module.exports = { Product }