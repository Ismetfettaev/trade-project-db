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

// 5.1. Получение всех записей
exports.findAll = (req, res) => {
  GoodsGroup.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving goodsgroups."
      });
    });
};

// 5.2. Получение одной записи по идентификатору
exports.findOne = (req, res) => {
  const id = req.params.id;

  GoodsGroup.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find GoodsGroup with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving GoodsGroup with id=" + id
      });
    });
};

// 5.3. Обновление записи по идентификатору
exports.update = (req, res) => {
  const id = req.params.id;

  GoodsGroup.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "GoodsGroup was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update GoodsGroup with id=${id}. Maybe it was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating GoodsGroup with id=" + id
      });
    });
};

// 5.4. Удаление объекта по идентификатору
exports.delete = (req, res) => {
  const id = req.params.id;

  GoodsGroup.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "GoodsGroup was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete GoodsGroup with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete GoodsGroup with id=" + id
      });
    });
};

// 5.5. Удаление всех записей
exports.deleteAll = (req, res) => {
  GoodsGroup.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} GoodsGroups were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while removing all goodsgroups."
      });
    });
};