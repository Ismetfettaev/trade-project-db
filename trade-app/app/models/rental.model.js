const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Rental = sequelize.define('Rental', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    rentalDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    returnDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    totalAmount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true
    }
  }, {
    tableName: 'rental',
    timestamps: false
  });

  return Rental;
};