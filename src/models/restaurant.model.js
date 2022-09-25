const { db, DataTypes } = require('../config/database');

const Restaurant = db.define(
  'restaurants',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    rating: {
      type: DataTypes.FLOAT,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: 'active',
    },
  },
  {
    timestamps: false,
  }
);

module.exports = { Restaurant };
