module.exports = (sequelize, Sequelize) => {
  const GoodsGroup = sequelize.define("goods_group", {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description: {
      type: Sequelize.TEXT
    }
  });

  return GoodsGroup;
};