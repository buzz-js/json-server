const { initConnection } = require("../database");
const shortid = require("shortid");

module.exports = {
  index: async (_, res) => {
    const db = await initConnection();
    const series = db.get("series").value();
    res.json(series);
  },
  store: async (req, res) => {
    const { title, overview } = req.body;
    const serie = { id: shortid.generate(), title, overview };
    const db = await initConnection();
    db.get("series").push(serie).write();
    res.json(serie);
  },
  show: async (req, res) => {
    const { id } = req.params;
    const db = await initConnection();
    const serie = db.get("series").find({ id }).value();
    res.json(serie);
  },
};
