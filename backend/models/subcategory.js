// models/subcategory.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Category = require('./category');

// Définition du modèle Subcategory
const Subcategory = sequelize.define('Subcategory', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Category, // Référence au modèle Category
      key: 'id',
    },
    field: 'category_id',
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  createdAt: {
    type: DataTypes.DATE, // Utilisation de DATE au lieu de TIMESTAMP
    defaultValue: DataTypes.NOW,
    field: 'created_at',
  },
  updatedAt: {
    type: DataTypes.DATE, // Utilisation de DATE au lieu de TIMESTAMP
    defaultValue: DataTypes.NOW,
    onUpdate: DataTypes.NOW,
    field: 'updated_at',
  },
}, {
  tableName: 'subcategories',
  timestamps: true, // Assure que createdAt et updatedAt sont gérés automatiquement
});

// Définition des associations
Subcategory.belongsTo(Category, { foreignKey: 'categoryId' , onDelete: 'CASCADE',   onUpdate: 'CASCADE',});
Category.hasMany(Subcategory, { foreignKey: 'categoryId' , onDelete: 'CASCADE',   onUpdate: 'CASCADE',});

module.exports = Subcategory;
