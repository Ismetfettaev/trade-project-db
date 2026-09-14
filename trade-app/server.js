const express = require("express");
const cors = require("cors");
const db = require("./app/models");

// 1. Импорт модулей Swagger
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();

var corsOptions = {
  origin: "http://localhost:8080" // Или "*", если нужно разрешить все источники
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to trade-app application." });
});

// ==========================================
// 2. Конфигурация и подключение Swagger
// ==========================================
const swaggerOptions = {
  definition: {
    openapi: '3.0.0', // NOTE! Важно оставить именно '3.0.0', как указано в методичке
    info: {
      title: 'Trade App API',
      version: '1.0.0',
      description: 'API для приложения управления товарами',
    },
    servers: [
      {
        url: 'http://localhost:3000', // Используем ваш порт 3000 (в методичке опечатка с 8080)
      },
    ],
  },
  apis: ['./app/routes/*.js'], // Путь к файлам, где будут написаны JSDoc комментарии с описанием API
};

const swaggerSpecs = swaggerJsdoc(swaggerOptions);

// Подключение Swagger UI по адресу /api-docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));
// ==========================================

// 3. Подключение основных маршрутов
const goodsRouter = require('./app/routes/goods.routes');
app.use('/api/goods', goodsRouter);

// Маршрут для получения названия категории товара
const goodsController = require("./app/controllers/goods.controller");
app.get("/api/goods/:id/goodsgroupname", goodsController.getGoodsGroupName);

// 4. Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// 5. Синхронизация базы данных
db.sequelize.sync({ alter: true })
  .then(() => { console.log("Synced db."); })
  .catch((err) => { console.log("Failed to sync db: " + err.message); });