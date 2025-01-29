const express = require('express');
const { createEventController, getEventsController } = require('../controllers/eventController');
const { authentificate } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/events', getEventsController);
router.post('/events', createEventController);

module.exports = router;
