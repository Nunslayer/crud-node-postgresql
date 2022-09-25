const { db, DataTypes } = require('../config/database');

const Order = db.define(
  'orders',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    totalPrice: {
      type: DataTypes.FLOAT,
    },
    quantity: {
      type: DataTypes.INTEGER,
    },
    status: {
      type: DataTypes.ENUM,
      values: ['active', 'cancelledd', 'completed'],
      defaultValue: 'active',
    },
  },
  {
    timestamps: false,
  }
);

module.exports = { Order };
