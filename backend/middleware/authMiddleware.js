// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {

  const token = req.headers['authorization']?.split(' ')[1];
  if (token == null) return res.status(401).json({ message: 'Token required' });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid token' });
    req.user = user;
    next();
  });
};

const authorizeAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Access denied' });
  }
  next();
};

module.exports = { authenticateToken, authorizeAdmin };
