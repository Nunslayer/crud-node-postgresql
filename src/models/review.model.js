const { db, DataTypes } = require('../config/database');

const Review = db.define(
  'reviews',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    comment: {
      type: DataTypes.STRING,
    },
    rating: {
      type: DataTypes.INTEGER,
      defaultValue: 3,
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

module.exports = { Review };
