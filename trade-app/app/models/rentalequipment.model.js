const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const RentalEquipment = sequelize.define('RentalEquipment', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'rentalequipment',
    timestamps: false
  });

  return RentalEquipment;
};