// controllers/imageController.js
const  Image  = require('../models/image');

exports.createImage = async (req, res) => {
  try {
    const image = await Image.create(req.body);
    res.status(201).json(image);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getImages = async (req, res) => {
  try {
    const images = await Image.findAll();
    res.status(200).json(images);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getImageById = async (req, res) => {
  try {
    const image = await Image.findByPk(req.params.id);
    if (image) {
      res.status(200).json(image);
    } else {
      res.status(404).json({ message: 'Image not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateImage = async (req, res) => {
  try {
    const [updated] = await Image.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedImage = await Image.findByPk(req.params.id);
      res.status(200).json(updatedImage);
    } else {
      res.status(404).json({ message: 'Image not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteImage = async (req, res) => {
  try {
    const deleted = await Image.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).json({ message: 'Image deleted' });
    } else {
      res.status(404).json({ message: 'Image not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
