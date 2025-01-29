const { database } = require('../config/database');

const createEvent = async (title, description, date, price, place, category) => {
    const { data, error } = await database
    .from('events')
    .insert({title, description, date, price, place, category});
    if (error) throw new Error(error.message);
  return data;
};

const getEvents = async () => {
    const { data, error } = await database
    .from('events')
    .select('title, description, date, price, place, category');
    if (error) throw new Error(error.message);
    return data;
};

// const updateEvent = async () => {
//     const { data, error } = await database
//     .from('events')
//     .select('title, description, date, price, place, category');
//     if (error) throw new Error(error.message);
//     return data;
// };

// const deleteEvent = async () => {
//     const { data, error } = await database
//     .from('events')
//     .select('title, description, date, price, place, category');
//     if (error) throw new Error(error.message);
//     return data;
// };


module.exports = {
    createEvent,
    getEvents,
  };
