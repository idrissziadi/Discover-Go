// controllers/reviewController.js
const  Review  = require('../models/review');
const Site = require('../models/site');
const jwt = require('jsonwebtoken');




exports.getReviews = async (req, res) => {
  try {
    const reviews = await Review.findAll();
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getReviewById = async (req, res) => {
  try {
    const review = await Review.findByPk(req.params.id);
    if (review) {
      res.status(200).json(review);
    } else {
      res.status(404).json({ message: 'Review not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateReview = async (req, res) => {
  try {
    const [updated] = await Review.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedReview = await Review.findByPk(req.params.id);
      res.status(200).json(updatedReview);
    } else {
      res.status(404).json({ message: 'Review not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteReview = async (req, res) => {
  try {
    const deleted = await Review.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).json({ message: 'Review deleted' });
    } else {
      res.status(404).json({ message: 'Review not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Méthode pour ajouter une critique
exports.createReview = async (req, res) => {
  try {
    // Vérifiez le token d'authentification
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Assurez-vous d'utiliser la même clé que pour signer le token

    const { siteId, comment, rating } = req.body;

    if (!siteId || !comment || !rating) {
      return res.status(400).json({ message: 'Tous les champs sont requis' });
    }

    // Vérifiez si le site existe
    const site = await Site.findByPk(siteId);
    if (!site) {
      return res.status(404).json({ message: 'Site non trouvé' });
    }

    // Créez la critique
    const review = await Review.create({
      siteId,
      userId: decoded.id, // Assurez-vous que l'ID utilisateur est extrait du token
      comment,
      rating,
    });

    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
