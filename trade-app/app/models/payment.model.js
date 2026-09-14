module.exports = (sequelize, Sequelize) => {
  const Payment = sequelize.define("payment", {
    PaymentDate: {
      type: Sequelize.DATEONLY,
      allowNull: false
    },
    PaymentTime: {
      type: Sequelize.TIME,
      allowNull: false
    },
    Amount: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false
    },
    PaymentMethod: {
      type: Sequelize.STRING(50),
      allowNull: false
    }
  });

  return Payment;
};