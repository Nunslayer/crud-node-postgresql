const { db, DataTypes } = require('../config/database');

const User = db.define(
  'users',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: 'active',
    },
    role: {
      type: DataTypes.STRING,
      defaultValue: 'normal',
    },
  },
  {
    timestamps: false,
  }
);

module.exports = { User };
