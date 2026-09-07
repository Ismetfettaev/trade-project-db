   // Связи для pricelistequipment
   Pricelist.hasMany(PricelistEquipment, { foreignKey: 'pricelistId' });
   PricelistEquipment.belongsTo(Pricelist, { foreignKey: 'pricelistId' });
   
   Equipment.hasMany(PricelistEquipment, { foreignKey: 'equipmentId' });
   PricelistEquipment.belongsTo(Equipment, { foreignKey: 'equipmentId' });