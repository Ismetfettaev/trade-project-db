module.exports = (sequelize, Sequelize) => {
  const EquipmentCategory = sequelize.define("equipment_category", {
    Name: {
      type: Sequelize.STRING(50),
      allowNull: false,
      unique: true
    },
    Description: {
      type: Sequelize.STRING(256),
      allowNull: true
    }
  });

  return EquipmentCategory;
};