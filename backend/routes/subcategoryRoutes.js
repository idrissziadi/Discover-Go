// routes/subcategoryRoutes.js
const express = require('express');
const router = express.Router();
const subcategoryController = require('../controllers/subcategoryController');
const { authenticateToken, authorizeAdmin } = require('../middleware/authMiddleware');

// Routes publiques (GET)
router.get('/', subcategoryController.getSubcategories);
router.get('/:id', subcategoryController.getSubcategoryById);


// Routes protégées nécessitant l'authentification et le rôle adminn
router.post('/', authenticateToken, authorizeAdmin, subcategoryController.createSubcategory);
router.put('/:id', authenticateToken, authorizeAdmin, subcategoryController.updateSubcategory);
router.delete('/:id', authenticateToken, authorizeAdmin, subcategoryController.deleteSubcategory);

module.exports = router;
