const { initConnection } = require("../database");

module.exports = {
  index: async (req, res) => {
    const { id } = req.params;
    const db = await initConnection();
    const episodes = db.get("episodes").filter({ serie_id: id }).value();
    res.json(episodes);
  },
};
