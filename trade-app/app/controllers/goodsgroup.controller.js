const db = require("../models");
const GoodsGroup = db.goodsgroup; // Убедись, что модель называется именно так в твоем index.js из models

// 2.1 Создание нового объекта
exports.create = (req, res) => {
  // Валидация запроса (опционально, но полезно)
  if (!req.body.name) {
    res.status(400).send({
      message: "Name can not be empty!"
    });
    return;
  }

  // Создаем объект на основе данных из запроса
  const goodsGroup = {
    name: req.body.name,
    parentId: req.body.parentId // Если у тебя есть иерархия (вложенность групп)
  };

  // Сохраняем в БД через Sequelize
  GoodsGroup.create(goodsGroup)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the GoodsGroup."
      });
    });
};

// Заглушки для остальных методов (добавим на Шаге 5)
exports.findAll = (req, res) => {};
exports.findOne = (req, res) => {};
exports.update = (req, res) => {};
exports.delete = (req, res) => {};
exports.deleteAll = (req, res) => {};