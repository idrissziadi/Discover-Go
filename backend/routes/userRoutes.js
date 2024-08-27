// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const userController = require("./../controllers/userController")
const { authenticateToken, authorizeAdmin } = require('../middleware/authMiddleware');
// Route pour la connexion
router.post('/login', authController.loginUser);

// Route pour la création d'un utilisateur
// (Pas protégé, donc accessible à tous)
router.post('/', authController.createUser);

// Routes protégées nécessitant l'authentification et le rôle admin
router.get('/', authenticateToken, authorizeAdmin, userController.getUsers);
router.get('/:id', authenticateToken, authorizeAdmin, userController.getUserById);
router.put('/:id', authenticateToken, authorizeAdmin, userController.updateUser);
router.delete('/:id', authenticateToken, authorizeAdmin, userController.deleteUser);

module.exports = router;
