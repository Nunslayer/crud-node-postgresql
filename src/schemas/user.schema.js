const {DataTypes} = require('sequelize')
const { sequelize } = require("../config/database");
const {Product} =  require('./product.schema')
const User = sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    surname: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    }
}, {
    timestamps: true
})

User.hasMany(Product, {
    foreignKey: 'userId',
    sourceKey: 'id'
})
Product.belongsTo(User,{
    foreignKey: 'userId',
    targetKey: 'id'
})
module.exports = {User}