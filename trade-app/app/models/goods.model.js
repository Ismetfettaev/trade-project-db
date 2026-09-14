module.exports = (sequelize, DataTypes) => {
  const Goods = sequelize.define("Goods", {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL(10, 2),
    goods_group_id: DataTypes.INTEGER
  }, {
    tableName: 'goods',
    timestamps: false,
    underscored: true
  });
  
  return Goods;
};