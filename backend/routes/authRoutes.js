const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Register route
router.post('/register', authController.register);

// Login route
router.post('/login', authController.login);

// Forgot Password route
router.post('/forgot-password', authController.forgotPassword);

module.exports = router;
