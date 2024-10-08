// controllers/siteController.js
const  Site = require('../models/site');
const Image = require('../models/image'); 
const Review = require('../models/review');
const User = require('../models/user');
const Event = require('../models/event');
exports.createSite = async (req, res) => {
  try {
    const site = await Site.create(req.body);
    res.status(201).json(site);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getSites = async (req, res) => {
  try {
    console.log("hahahha1");
    const sites = await Site.findAll();
    console.log("hahahha2");
    res.status(200).json(sites);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getSiteById = async (req, res) => {
  try {
    const site = await Site.findByPk(req.params.id);
    if (site) {
      res.status(200).json(site);
    } else {
      res.status(404).json({ message: 'Site not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateSite = async (req, res) => {
  try {
    const [updated] = await Site.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedSite = await Site.findByPk(req.params.id);
      res.status(200).json(updatedSite);
    } else {
      res.status(404).json({ message: 'Site not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteSite = async (req, res) => {
  try {
    const deleted = await Site.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).json({ message: 'Site deleted' });
    } else {
      res.status(404).json({ message: 'Site not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Nouvelle méthode pour obtenir les sites par ID de sous-catégorie
exports.getSitesBySubcategoryId = async (req, res) => {
    try {
      const subcategoryId = req.params.subcategoryId;
      const sites = await Site.findAll({
        where: { subcategoryId: subcategoryId },
        include: [{
          model: Image,        // Inclure les images associées
          attributes: ['id', 'imageUrl'], // Spécifier les attributs d'image à inclure
        }]
      });
  
      if (sites.length > 0) {
        res.status(200).json(sites);
      } else {
        res.status(404).json({ message: 'No sites found for the given subcategory idriss' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  // Method to get all sites with their reviews and associated user names
exports.getSitesWithReviews = async (req, res) => {
  try {
    const sites = await Site.findAll({
      include: [
        {
          model: Review,
          attributes: ['id', 'rating', 'comment', 'createdAt'], // Include desired Review attributes
          include: [
            {
              model: User,
              attributes: ['username'], // Include only the username of the user
            }
          ]
        },
        {
          model: Image,
          attributes: ['id', 'imageUrl'],
        },
        {
          model : Event,
          attributes : ['id' , 'title' , 'description' , 'event_date' ], 
        }
      ]
    });

    if (sites.length > 0) {
      res.status(200).json(sites);
    } else {
      res.status(404).json({ message: 'No sites found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
