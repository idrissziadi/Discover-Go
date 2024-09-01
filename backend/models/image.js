// models/image.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Site = require('./site');

const Image = sequelize.define('Image', {
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
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'image_url',
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    field: 'created_at',
  },
}, {
  tableName: 'images',
  timestamps: false,
});

Image.belongsTo(Site, { foreignKey: 'siteId', onDelete: 'CASCADE',   onUpdate: 'CASCADE',});
Site.hasMany(Image, { foreignKey: 'siteId' , onDelete: 'CASCADE',   onUpdate: 'CASCADE',});

module.exports = Image;
