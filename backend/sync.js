// sync.js
const sequelize = require('./config/db');
const Category = require('./models/category');
const Subcategory = require('./models/subcategory');
const Site = require('./models/site');
const Image = require('./models/image');
const Event = require('./models/event');
const User = require('./models/user');
const Review = require('./models/review');
const Contact = require('./models/contact');

const syncDatabase = async () => {
  try {
    await sequelize.sync({ alter: true , force : true}); // Met à jour les tables existantes pour correspondre aux modèles
    console.log('Les tables ont été mises à jour avec succès.');
  } catch (error) {
    console.error('Erreur lors de la mise à jour des tables:', error);
  }
};

syncDatabase();
