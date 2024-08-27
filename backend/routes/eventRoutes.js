// routes/eventRoutes.js
const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
const { authenticateToken, authorizeAdmin } = require('../middleware/authMiddleware');

// Routes publiques (GET)
router.get('/', eventController.getEvents);
router.get('/:id', eventController.getEventById);

// Routes protégées nécessitant l'authentification et le rôle admin
router.post('/', authenticateToken, authorizeAdmin, eventController.createEvent);
router.put('/:id', authenticateToken, authorizeAdmin, eventController.updateEvent);
router.delete('/:id', authenticateToken, authorizeAdmin, eventController.deleteEvent);

module.exports = router;
