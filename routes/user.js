const express = require('express');
const auth = require('../middleware/auth');
const roles = require('../middleware/roles');

const router = express.Router();

// Public Route
router.get('/public', (req, res) => {
  res.status(200).json({ message: 'This is a public route' });
});

// Protected Route
router.get('/protected', auth, (req, res) => {
  res.status(200).json({ message: 'You are authenticated' });
});

// Admin Route
router.get('/admin', auth, roles(['Admin']), (req, res) => {
  res.status(200).json({ message: 'Admin Access' });
});

module.exports = router;
