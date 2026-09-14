const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  port: dbConfig.port,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// === ИМПОРТ ВСЕХ МОДЕЛЕЙ ===
const GoodsGroup = require("./goods-group.model.js")(sequelize, Sequelize);
const Client = require("./client.model.js")(sequelize, Sequelize);
const Employee = require("./employee.model.js")(sequelize, Sequelize);
const EquipmentCategory = require("./equipment-category.model.js")(sequelize, Sequelize);
const Equipment = require("./equipment.model.js")(sequelize, Sequelize);
const RentalOrder = require("./rental-order.model.js")(sequelize, Sequelize);
const RentalItem = require("./rental-item.model.js")(sequelize, Sequelize);
const Payment = require("./payment.model.js")(sequelize, Sequelize);
const MaintenanceRecord = require("./maintenanceRecord.model.js")(sequelize, Sequelize);

// === РЕГИСТРАЦИЯ МОДЕЛЕЙ ===
db.goods_groups = GoodsGroup;
db.clients = Client;
db.employees = Employee;
db.equipment_categories = EquipmentCategory;
db.equipment = Equipment;
db.rental_orders = RentalOrder;
db.rental_items = RentalItem;
db.payments = Payment;
db.maintenance_records = MaintenanceRecord;

// === НАСТРОЙКА СВЯЗЕЙ (Foreign Keys) ===

// Equipment принадлежит EquipmentCategory
Equipment.belongsTo(EquipmentCategory, { 
  foreignKey: 'IdCategory', 
  as: 'category' 
});
EquipmentCategory.hasMany(Equipment, { 
  foreignKey: 'IdCategory', 
  as: 'equipment' 
});

// RentalOrder принадлежит Client
RentalOrder.belongsTo(Client, { 
  foreignKey: 'IdClient', 
  as: 'client' 
});
Client.hasMany(RentalOrder, { 
  foreignKey: 'IdClient', 
  as: 'orders' 
});

// RentalOrder оформлен Employee
RentalOrder.belongsTo(Employee, { 
  foreignKey: 'IdEmployee', 
  as: 'employee' 
});
Employee.hasMany(RentalOrder, { 
  foreignKey: 'IdEmployee', 
  as: 'orders' 
});

// RentalItem принадлежит RentalOrder
RentalItem.belongsTo(RentalOrder, { 
  foreignKey: 'IdOrder', 
  as: 'order' 
});
RentalOrder.hasMany(RentalItem, { 
  foreignKey: 'IdOrder', 
  as: 'items' 
});

// RentalItem включает Equipment
RentalItem.belongsTo(Equipment, { 
  foreignKey: 'IdEquipment', 
  as: 'equipment' 
});
Equipment.hasMany(RentalItem, { 
  foreignKey: 'IdEquipment', 
  as: 'rentalItems' 
});

// Payment принадлежит RentalOrder
Payment.belongsTo(RentalOrder, { 
  foreignKey: 'IdOrder', 
  as: 'order' 
});
RentalOrder.hasMany(Payment, { 
  foreignKey: 'IdOrder', 
  as: 'payments' 
});

// MaintenanceRecord для Equipment
MaintenanceRecord.belongsTo(Equipment, { 
  foreignKey: 'IdEquipment', 
  as: 'equipment' 
});
Equipment.hasMany(MaintenanceRecord, { 
  foreignKey: 'IdEquipment', 
  as: 'maintenanceRecords' 
});

// MaintenanceRecord проведен Employee
MaintenanceRecord.belongsTo(Employee, { 
  foreignKey: 'IdEmployee', 
  as: 'employee' 
});
Employee.hasMany(MaintenanceRecord, { 
  foreignKey: 'IdEmployee', 
  as: 'maintenanceRecords' 
});

module.exports = db;