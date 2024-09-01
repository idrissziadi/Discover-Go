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
router.post('/signup', authController.createUser);

// Routes protégées nécessitant l'authentification et le rôle admin
router.post('/', authController.createUser);
router.get('/', authenticateToken, authorizeAdmin, userController.getUsers);
router.get('/:id', authenticateToken, authorizeAdmin, userController.getUserById);
router.put('/:id', authenticateToken, authorizeAdmin, userController.updateUser);
router.delete('/:id', authenticateToken, authorizeAdmin, userController.deleteUser);


// Routes protégées nécessitant l'authentification
router.put('/update-username', authenticateToken, userController.updateUsername);
router.patch('/update-password', authenticateToken, userController.updatePassword);
router.delete('/deactivate', authenticateToken, userController.deactivateAccount);


module.exports = router;
