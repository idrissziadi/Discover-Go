// models/site.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Subcategory = require('./subcategory');

const Site = sequelize.define('Site', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  subcategoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Subcategory,
      key: 'id',
    },
    field: 'subcategory_id',
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  history: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  latitude: {
    type: DataTypes.DECIMAL(10, 8),
    allowNull: true,
  },
  longitude: {
    type: DataTypes.DECIMAL(11, 8),
    allowNull: true,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    field: 'created_at',
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    onUpdate: DataTypes.NOW,
    field: 'updated_at',
  },
}, {
  tableName: 'sites',
  timestamps: true,
});

Site.belongsTo(Subcategory, { foreignKey: 'subcategoryId' , onDelete: 'CASCADE',   onUpdate: 'CASCADE',});
Subcategory.hasMany(Site, { foreignKey: 'subcategoryId' , onDelete: 'CASCADE',   onUpdate: 'CASCADE',});

module.exports = Site;
