const express = require('express');
const { createEventController, getEventsController } = require('../controllers/eventController');
const { authentificate } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', getEventsController);
router.post('/', createEventController);

module.exports = router;
