const { initConnection } = require("../database");
const shortid = require("shortid");

module.exports = {
  index: async (_, res) => {
    const db = await initConnection();
    const episodes = db.get("episodes").value();
    res.json(episodes);
  },
  store: async (req, res) => {
    const { title, overview } = req.body;
    const episode = { id: shortid.generate(), title, overview };
    const db = await initConnection();
    db.get("episodes").push(episode).write();
    res.json(episode);
  },
  show: async (req, res) => {
    const { id } = req.params;
    const db = await initConnection();
    const episode = db.get("episodes").find({ id }).value();
    res.json(episode);
  },
};
