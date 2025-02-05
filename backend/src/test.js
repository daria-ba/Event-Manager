// tests/eventController.test.js

const request = require('supertest');
const express = require('express');
const { getEventsController } = require('./controllers/eventController');

// Создаем приложение Express для теста
const app = express();
app.get('/api/events', getEventsController);  // Указываем наш маршрут и контроллер

describe('GET /api/events', () => {
  it('should return a list of events with status 200', async () => {
    const response = await request(app).get('/api/events');

    // Проверяем, что статус ответа равен 200
    expect(response.status).toBe(200);

    // Проверяем, что ответ содержит правильные данные
    // expect(response.body).toEqual([
    //   { id: 1, name: 'Event 1' },
    //   { id: 2, name: 'Event 2' },
    // ]);
  });

  it('should return an empty array if no events exist', async () => {
    // Можешь протестировать ситуацию, если событий нет в базе данных
    const response = await request(app).get('/api/events');
    
    // Предположим, что база данных пуста
    expect(response.status).toBe(200);
    expect(response.body).toEqual([]);
  });
});
