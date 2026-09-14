module.exports = (sequelize, Sequelize) => {
  const Equipment = sequelize.define("equipment", {
    Name: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    SerialNumber: {
      type: Sequelize.STRING(40),
      allowNull: false,
      unique: true
    },
    YearOfManufacture: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    Producer: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    Status: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    Description: {
      type: Sequelize.STRING(256),
      allowNull: true
    }
  });

  return Equipment;
};