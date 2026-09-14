const goodsController = require("../controllers/goods.controller");

/**
 * @swagger
 * components:
 *   schemas:
 *     Good:
 *       type: object
 *       required:
 *         - name
 *         - price
 *       properties:
 *         id:
 *           type: integer
 *           description: Уникальный идентификатор товара
 *         name:
 *           type: string
 *           description: Название товара
 *         price:
 *           type: number
 *           description: Цена товара
 *         description:
 *           type: string
 *           description: Описание товара
 *         categoryId:
 *           type: integer
 *           description: ID категории товара
 *       example:
 *         id: 1
 *         name: Ноутбук
 *         price: 75000
 *         description: Игровой ноутбук
 *         categoryId: 1
 */

/**
 * @swagger
 * tags:
 *   name: Goods
 *   description: API для управления товарами
 */

module.exports = (app) => {
  console.log('=== REGISTERING GOODS ROUTE ===');

  /**
   * @swagger
   * /api/goods:
   *   get:
   *     summary: Получить список всех товаров
   *     tags: [Goods]
   *     responses:
   *       200:
   *         description: Успешный запрос
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 $ref: '#/components/schemas/Good'
   *       500:
   *         description: Ошибка сервера
   */
  app.get("/api/goods", (req, res) => {
    console.log('=== HANDLER CALLED ===');
    console.log('Params:', req.params);
    return goodsController.findAll(req, res);
  });

  /**
   * @swagger
   * /api/goods:
   *   post:
   *     summary: Создать новый товар
   *     tags: [Goods]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Good'
   *     responses:
   *       201:
   *         description: Товар успешно создан
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Good'
   *       400:
   *         description: Ошибка валидации данных
   *       500:
   *         description: Ошибка сервера
   */
  app.post("/api/goods", (req, res) => {
    console.log('=== HANDLER CALLED ===');
    console.log('Params:', req.params);
    return goodsController.create(req, res);
  });

  /**
   * @swagger
   * /api/goods/{id}:
   *   get:
   *     summary: Получить товар по идентификатору
   *     tags: [Goods]
   *     parameters:
   *       - in: path
   *         name: id
   *         schema:
   *           type: integer
   *         required: true
   *         description: ID товара
   *     responses:
   *       200:
   *         description: Успешный запрос
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Good'
   *       404:
   *         description: Товар не найден
   *       500:
   *         description: Ошибка сервера
   */
  app.get("/api/goods/:id", (req, res) => {
    console.log('=== HANDLER CALLED ===');
    console.log('Params:', req.params);
    return goodsController.findOne(req, res);
  });

  /**
   * @swagger
   * /api/goods/{id}:
   *   put:
   *     summary: Обновить товар по идентификатору
   *     tags: [Goods]
   *     parameters:
   *       - in: path
   *         name: id
   *         schema:
   *           type: integer
   *         required: true
   *         description: ID товара
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Good'
   *     responses:
   *       200:
   *         description: Товар успешно обновлен
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Good'
   *       404:
   *         description: Товар не найден
   *       500:
   *         description: Ошибка сервера
   */
  app.put("/api/goods/:id", (req, res) => {
    console.log('=== HANDLER CALLED ===');
    console.log('Params:', req.params);
    return goodsController.update(req, res);
  });

  /**
   * @swagger
   * /api/goods/{id}:
   *   delete:
   *     summary: Удалить товар по идентификатору
   *     tags: [Goods]
   *     parameters:
   *       - in: path
   *         name: id
   *         schema:
   *           type: integer
   *         required: true
   *         description: ID товара
   *     responses:
   *       200:
   *         description: Товар успешно удален
   *       404:
   *         description: Товар не найден
   *       500:
   *         description: Ошибка сервера
   */
  app.delete("/api/goods/:id", (req, res) => {
    console.log('=== HANDLER CALLED ===');
    console.log('Params:', req.params);
    return goodsController.delete(req, res);
  });

  /**
   * @swagger
   * /api/goods/paginated:
   *   get:
   *     summary: Получить список товаров с пагинацией
   *     tags: [Goods]
   *     parameters:
   *       - in: query
   *         name: page
   *         schema:
   *           type: integer
   *           default: 1
   *         description: Номер страницы
   *       - in: query
   *         name: size
   *         schema:
   *           type: integer
   *           default: 10
   *         description: Количество товаров на странице
   *     responses:
   *       200:
   *         description: Успешная пагинированная выдача
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 totalItems:
   *                   type: integer
   *                 items:
   *                   type: array
   *                   items:
   *                     $ref: '#/components/schemas/Good'
   *                 totalPages:
   *                   type: integer
   *                 currentPage:
   *                   type: integer
   *       500:
   *         description: Ошибка сервера
   */
  app.get("/api/goods/paginated", (req, res) => {
    console.log('=== HANDLER CALLED ===');
    console.log('Params:', req.params);
    return goodsController.findPaginated(req, res);
  });

  app.get("/api/goods/:id/goodsgroupname", (req, res) => {
    console.log('=== HANDLER CALLED ===');
    console.log('Params:', req.params);
    return goodsController.getGoodsGroupName(req, res);
  });

  console.log('=== GOODS ROUTE REGISTERED ===');
};