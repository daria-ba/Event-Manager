const express = require('express');
const { sequelize } = require('./models'); // Подключение Sequelize
const app = require('./app'); // Файл app.js с маршрутами

const PORT = process.env.PORT || 3000;

// Проверяем подключение к базе данных и запускаем сервер
sequelize
  .authenticate()
  .then(() => {
    console.log('Database connected successfully.');
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });
