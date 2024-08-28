// routes/siteRoutes.js
const express = require('express');
const router = express.Router();
const siteController = require('../controllers/siteController');
const { authenticateToken, authorizeAdmin } = require('../middleware/authMiddleware');

// Routes publiques (GET)
router.get('/', siteController.getSites);
router.get('/:id', siteController.getSiteById);
router.get('/subcategory/:subcategoryId', siteController.getSitesBySubcategoryId);

// Routes protégées nécessitant l'authentification et le rôle admin
router.post('/', authenticateToken, authorizeAdmin, siteController.createSite);
router.put('/:id', authenticateToken, authorizeAdmin, siteController.updateSite);
router.delete('/:id', authenticateToken, authorizeAdmin, siteController.deleteSite);

module.exports = router;
