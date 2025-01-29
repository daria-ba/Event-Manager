const { createEvent, getEvents } = require('../services/eventService');

const createEventController = async (req, res) => {
  const { title, description, date, location } = req.body;
  try {
    await createEvent(title, description, date, location);
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
