const { createEvent, getEvents } = require('../services/eventService');

const createEventController = async (req, res) => {
  const { id, title, description, date, price, place, category } = req.body;
  try {
    await createEvent(id, title, description, date, price, place, category);
    res.status(201).json({ message: 'Мероприятие добавлено!' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getEventsController = async (req, res) => {
  try {
    const events = await getEvents();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getEventsController,
  createEventController,
}
