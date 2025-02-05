import axios from "axios";
import api from "./api";

export const getEvents = async () => {
    const response = await api.get('/events');
    return response.data;
}


// поля события:

// - айди (автоматически)
// - айди организатора (как связывать?)
// - изображение
// - название
// - описание события
// - дата
// - время
// - адрес проведения
// - геометка (как хранится из яндекса?)
// - город
// - цена
// - категория