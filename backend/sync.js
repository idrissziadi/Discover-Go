// generateToken.js
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Informations de l'utilisateur
const user = {
  id: 2, // Remplacez par l'ID réel de l'utilisateur
  role: 'admin' // Remplacez par le rôle réel de l'utilisateur
};

// Génération du token
const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '1h' });

console.log('Generated Token:', token);
