module.exports = app => {
  const goodsgroups = require("../controllers/goodsgroup.controller.js");
  const goodsController = require("../controllers/goods.controller");

  var router = require("express").Router();

  // Создание новой GoodsGroup
  router.post("/", goodsgroups.create);

  // Получение всех записей
  router.get("/", goodsgroups.findAll);

  // === ПЕРЕМЕСТИ СЮДА (ДО /:id) ===
  // Пункт 3: Получить название категории товара
  router.get("/:id/goodsgroupname", goodsController.getGoodsGroupName);
  // =================================

  // Получение одной записи по id
  router.get("/:id", goodsgroups.findOne);

  // Обновление записи по id
  router.put("/:id", goodsgroups.update);

  // Удаление записи по id
  router.delete("/:id", goodsgroups.delete);

  // Удаление всех записей
  router.delete("/", goodsgroups.deleteAll);

  // Регистрируем маршрутизатор с префиксом /api/goodsgroups
  app.use("/api/goodsgroups", router);
};