const { Sequelize, DataTypes, Model } = require('sequelize');
const db = new Sequelize({
  dialect: 'postgres',
  port: process.env.DATABASE_PORT,
  host: process.env.DATABASE_URL,
  database: process.env.DATABASE_NAME,
  password: process.env.DATABASE_KEY_MAIN,
  username: process.env.DATABASE_USERNAME,
  logging: false,
});

module.exports = { db, DataTypes, Model };
