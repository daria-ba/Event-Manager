const express = require('express');
const router = express.Router();
const { Event } = require('../models');

// Создание события
router.post('/', async (req, res) => {
  try {
    const { title, description, date, location } = req.body;
    const event = await Event.create({ title, description, date, location });
    res.status(201).json(event);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Получение всех событий
router.get('/', async (req, res) => {
  const events = await Event.findAll();
  res.json(events);
});

module.exports = router;
