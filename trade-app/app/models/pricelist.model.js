const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Pricelist = sequelize.define('Pricelist', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    }
  }, {
    tableName: 'pricelist',
    timestamps: false
  });

  return Pricelist;
};