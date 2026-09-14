module.exports = (sequelize, Sequelize) => {
  const MaintenanceRecord = sequelize.define("maintenance_record", {
    MaintenanceDate: {
      type: Sequelize.DATEONLY,
      allowNull: false
    },
    WorkDescription: {
      type: Sequelize.STRING(256),
      allowNull: false
    },
    Cost: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: true
    }
  });

  return MaintenanceRecord;
};