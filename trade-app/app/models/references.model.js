module.exports = (models) => {
  const { Equipment, Pricelist, PricelistEquipment, Rental, RentalEquipment } = models;

  // --- Связи для Прайс-листа ---
  // Один прайс-лист имеет много записей с ценами на оборудование
  if (Pricelist && PricelistEquipment) {
    Pricelist.hasMany(PricelistEquipment, { foreignKey: 'pricelistId', onDelete: 'CASCADE' });
    PricelistEquipment.belongsTo(Pricelist, { foreignKey: 'pricelistId' });
  }

  // Одно оборудование может иметь разные цены в разных прайс-листах
  if (Equipment && PricelistEquipment) {
    Equipment.hasMany(PricelistEquipment, { foreignKey: 'equipmentId', onDelete: 'CASCADE' });
    PricelistEquipment.belongsTo(Equipment, { foreignKey: 'equipmentId' });
  }

  // --- Связи для Аренды ---
  // Одна аренда (заказ) включает в себя много позиций оборудования
  if (Rental && RentalEquipment) {
    Rental.hasMany(RentalEquipment, { foreignKey: 'rentalId', onDelete: 'CASCADE' });
    RentalEquipment.belongsTo(Rental, { foreignKey: 'rentalId' });
  }

  // Одно оборудование может сдаваться в аренду много раз (в разных заказах)
  if (Equipment && RentalEquipment) {
    Equipment.hasMany(RentalEquipment, { foreignKey: 'equipmentId', onDelete: 'CASCADE' });
    RentalEquipment.belongsTo(Equipment, { foreignKey: 'equipmentId' });
  }
module.exports = (db) => {
  // Goods belongs to GoodsGroup
  if (db.Goods && db.GoodsGroups) {
    db.Goods.belongsTo(db.GoodsGroups, { 
      foreignKey: "goods_group_id",
      as: "goodsGroup"
    });
    db.GoodsGroups.hasMany(db.Goods, { 
      foreignKey: "goods_group_id",
      as: "goods"
    });
  }
};
};