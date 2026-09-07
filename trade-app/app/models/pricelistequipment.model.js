const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const PricelistEquipment = sequelize.define('PricelistEquipment', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    pricePerDay: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    pricePerHour: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true
    }
  }, {
    tableName: 'pricelistequipment',
    timestamps: false
  });

  return PricelistEquipment;
};