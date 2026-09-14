module.exports = (sequelize, Sequelize) => {
  const RentalOrder = sequelize.define("rental_order", {
    StartDate: {
      type: Sequelize.DATEONLY,
      allowNull: false
    },
    StartTime: {
      type: Sequelize.TIME,
      allowNull: false
    },
    EndDate: {
      type: Sequelize.DATEONLY,
      allowNull: true
    },
    EndTime: {
      type: Sequelize.TIME,
      allowNull: true
    },
    TotalCost: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false
    }
  });

  return RentalOrder;
};