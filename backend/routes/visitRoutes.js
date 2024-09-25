const express = require('express');
const router = express.Router();
const visitController = require('../controllers/visitController');

router.post('/create', visitController.createVisit);
router.get('/', visitController.getVisits);
router.get('/:id', visitController.getVisitById);
router.put('/:id', visitController.updateVisit);
router.delete('/:id', visitController.deleteVisit);

module.exports = router;
