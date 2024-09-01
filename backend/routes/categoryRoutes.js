const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');
const { authenticateToken, authorizeAdmin } = require('../middleware/authMiddleware');

// Routes publiques (GET)
router.get('/', authenticateToken,categoryController.getCategories); // Liste des catégories
router.get('/:id', categoryController.getCategoryById); // Catégorie spécifique

// Routes protégées nécessitant l'authentification et le rôle admin
router.post('/', authenticateToken, authorizeAdmin, categoryController.createCategory); // Créer une nouvelle catégorie
router.put('/:id', authenticateToken, authorizeAdmin, categoryController.updateCategory); // Mettre à jour une catégorie existante
router.delete('/:id', authenticateToken, authorizeAdmin, categoryController.deleteCategory); // Supprimer une catégorie

module.exports = router;
