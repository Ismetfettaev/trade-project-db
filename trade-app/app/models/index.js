const { Sequelize, DataTypes } = require('sequelize');

// Используем переменные окружения из docker-compose.yml
const sequelize = new Sequelize(
  process.env.DB_NAME || 'bezkoder_db',
  process.env.DB_USER || 'postgres',
  process.env.DB_PASSWORD || 'postgres',
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
    port: parseInt(process.env.DB_PORT) || 5432,
    logging: false,
  }
);

const db = {};

// Инициализация моделей
db.Equipment = require('./equipment.model.js')(sequelize, DataTypes);
db.Pricelist = require('./pricelist.model.js')(sequelize, DataTypes);
db.PricelistEquipment = require('./pricelistequipment.model.js')(sequelize, DataTypes);
db.Rental = require('./rental.model.js')(sequelize, DataTypes);
db.RentalEquipment = require('./rentalequipment.model.js')(sequelize, DataTypes);

// Если есть старые модели — оставляем их
try {
  db.GoodsGroups = require('./goodsgroups.model.js')(sequelize, DataTypes);
  db.Tutorial = require('./tutorial.model.js')(sequelize, DataTypes);
} catch (e) {
  // старые модели могут отсутствовать
}

// Настройка связей
require('./references.model.js')(db);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// СИНХРОНИЗАЦИЯ — создаёт таблицы в БД
sequelize.sync({ alter: true })
  .then(() => console.log('✅ Database synced successfully'))
  .catch(err => console.error(' Error syncing database:', err));

module.exports = db;