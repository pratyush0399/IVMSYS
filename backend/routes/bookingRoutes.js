const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

router.post('/book', bookingController.bookVisit);
router.get('/', bookingController.getBookings);

module.exports = router;
