const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

// Importer Sequelize pour la connexion à la base de données
const sequelize = require('./config/db');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Test de la connexion à la base de données avec Sequelize
sequelize.authenticate()
  .then(() => console.log('Connexion à la base de données réussie.'))
  .catch(err => console.error('Erreur de connexion à la base de données :', err));

// Importer les routes
const categoryRoutes = require('./routes/categoryRoutes');
const subcategoryRoutes = require('./routes/subcategoryRoutes');
const siteRoutes = require('./routes/siteRoutes');
const eventRoutes = require('./routes/eventRoutes');
const userRoutes = require('./routes/userRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const contactRoutes = require('./routes/contactRoutes');

// Utiliser les routes
app.use('/api/categories', categoryRoutes);
app.use('/api/subcategories', subcategoryRoutes);
app.use('/api/sites', siteRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/users', userRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/contacts', contactRoutes);

// Synchroniser les modèles avec la base de données
sequelize.sync({ alter: true }) // 'alter' modifie les tables existantes pour correspondre aux modèles
  .then(() => {
    console.log('Modèles synchronisés avec la base de données.');
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch(err => console.error('Erreur de synchronisation des modèles :', err));
