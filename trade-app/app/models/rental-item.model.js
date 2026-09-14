module.exports = (sequelize, Sequelize) => {
  const RentalItem = sequelize.define("rental_item", {
    DaysCount: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    PricePerDay: {
      type: Sequelize.DECIMAL(6, 2),
      allowNull: false
    },
    TotalPrice: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false
    }
  });

  return RentalItem;
};