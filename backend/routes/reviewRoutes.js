// routes/reviewRoutes.js
const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');
const { authenticateToken, authorizeAdmin } = require('../middleware/authMiddleware');

// Routes protégées nécessitant l'authentification pour les requêtes GET
router.get('/', authenticateToken, reviewController.getReviews);
router.get('/:id', authenticateToken, reviewController.getReviewById);

// Routes protégées nécessitant l'authentification et le rôle admin pour les requêtes POST, PUT, DELETE
// Route protégée nécessitant l'authentification
router.post('/', authenticateToken, reviewController.createReview);
router.put('/:id', authenticateToken, reviewController.updateReview);
router.delete('/:id', authenticateToken, reviewController.deleteReview);

module.exports = router;
