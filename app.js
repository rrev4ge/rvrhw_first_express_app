const express = require('express');

const messageController = require('./controllers/message.controller');
const {validation} = require('./middleware');

const app = express();
app.use(express.json());

app.use((err, req, res, next) => {
  res.status(500).send(err);
});

app.get('/posts', messageController.getMessage);

app.post(
  '/new_post',
  validation.messageValidation,
  messageController.createMessage
);

app.patch(
  '/update',
  validation.messageValidation,
  messageController.updateMessage
);

app.delete('/delete', messageController.deleteMessage);

module.exports = app;

// Разработать серверное приложение, обрабатывающее http-запросы на создание и обновление
// сообщений форума. Сущность сообщения содержит текст сообщения, email автора, *дату создания
// сообщения.
// Создать маршрут используя методы use, get, post, patch, delete (выбрать нужное).
// Используйте промежуточные обработчики (middleware), например, для валидации email, текста
// сообщения (минимальная и максимальная длина), *даты (например, не позже сегодня) и т.п.
// Предусмотреть наличие стандартного обработчика ошибок.
// Соблюдать оговоренную структуру проекта (отдельное хранение middleware, контроллеров).
// Requests для тестирования работы приложения сохранить в папке requests.
// (По сути, нужно повторить то, что выполняли на занятии, только для другой сущности).
