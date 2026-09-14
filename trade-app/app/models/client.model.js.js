module.exports = (sequelize, Sequelize) => {
  const Client = sequelize.define("client", {
    FullName: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    Phone: {
      type: Sequelize.STRING(40),
      allowNull: false
    },
    Email: {
      type: Sequelize.STRING(40),
      allowNull: false,
      unique: true
    },
    Address: {
      type: Sequelize.STRING(256),
      allowNull: true
    }
  });

  return Client;
};