module.exports = (sequelize, Sequelize) => {
  const Employee = sequelize.define("employee", {
    FullName: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    BadgeNumber: {
      type: Sequelize.STRING(40),
      allowNull: false,
      unique: true
    },
    Position: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    Phone: {
      type: Sequelize.STRING(40),
      allowNull: true
    }
  });

  return Employee;
};