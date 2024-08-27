// models/review.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Site = require('./site');
const User = require('./user');

const Review = sequelize.define('Review', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  siteId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Site,
      key: 'id',
    },
    field: 'site_id',
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
    field: 'user_id',
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 5,
    },
  },
  comment: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    field: 'created_at',
  },
}, {
  tableName: 'reviews',
  timestamps: true,
});

Review.belongsTo(Site, { foreignKey: 'siteId' });
Site.hasMany(Review, { foreignKey: 'siteId' });

Review.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Review, { foreignKey: 'userId' });

module.exports = Review;
