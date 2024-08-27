// controllers/authController.js
const { User } = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Connexion de l'utilisateur
exports.loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ where: { email: req.body.email } });
    if (user && await bcrypt.compare(req.body.password, user.password)) {
      const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.status(200).json({ token });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Création d'un nouvel utilisateur
exports.createUser = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = await User.create({
      ...req.body,
      password: hashedPassword,
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
