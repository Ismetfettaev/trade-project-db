const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Equipment = sequelize.define('Equipment', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    equipmentType: {
      type: DataTypes.STRING, // Например: "Земляные работы", "Подъемное оборудование"
      allowNull: true
    }
  }, {
    tableName: 'equipment',
    timestamps: false
  });

  return Equipment;
};