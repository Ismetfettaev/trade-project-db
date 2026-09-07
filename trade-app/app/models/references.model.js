   // Связи для pricelistequipment
   Pricelist.hasMany(PricelistEquipment, { foreignKey: 'pricelistId' });
   PricelistEquipment.belongsTo(Pricelist, { foreignKey: 'pricelistId' });
   
   Equipment.hasMany(PricelistEquipment, { foreignKey: 'equipmentId' });
   PricelistEquipment.belongsTo(Equipment, { foreignKey: 'equipmentId' });
      // Связи для rental
   Rental.hasMany(RentalEquipment, { foreignKey: 'rentalId' });
   RentalEquipment.belongsTo(Rental, { foreignKey: 'rentalId' });
   
   Equipment.hasMany(RentalEquipment, { foreignKey: 'equipmentId' });
   RentalEquipment.belongsTo(Equipment, { foreignKey: 'equipmentId' });
      // Связи для rentalEquipment (связующая таблица)
   Rental.hasMany(RentalEquipment, { foreignKey: 'rentalId', onDelete: 'CASCADE' });
   RentalEquipment.belongsTo(Rental, { foreignKey: 'rentalId' });
   
   Equipment.hasMany(RentalEquipment, { foreignKey: 'equipmentId', onDelete: 'CASCADE' });
   RentalEquipment.belongsTo(Equipment, { foreignKey: 'equipmentId' });