const db = require("../models");
const QueryTypes = db.Sequelize.QueryTypes;

exports.getGoodsGroupName = async (req, res) => {
  try {
    const id = req.params.id;
    
    const query = `SELECT gg.name 
      FROM goodsgroups gg 
      LEFT JOIN goods g ON gg.id = g.goods_group_id 
      WHERE g.id = $1`;
    
    const result = await db.sequelize.query(query, {
      type: QueryTypes.SELECT,
      bind: [id]
    });

    if (result.length > 0) {
      res.status(200).send(result[0]);
    } else {
      res.status(404).send({ message: "Not found" });
    }
  } catch (err) {
    console.error('Error:', err.message);
    res.status(500).send({ message: "Database error" });
  }
};