// models/event.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Site = require('./site');

const Event = sequelize.define('Event', {
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
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  eventDate: {
    type: DataTypes.DATE,
    allowNull: true,
    field: 'event_date',
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
  tableName: 'events',
  timestamps: true,
});

Event.belongsTo(Site, { foreignKey: 'siteId' , onDelete: 'CASCADE',   onUpdate: 'CASCADE',});
Site.hasMany(Event, { foreignKey: 'siteId' , onDelete: 'CASCADE',   onUpdate: 'CASCADE',});

module.exports = Event;
