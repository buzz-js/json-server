const low = require("lowdb");
const FileAsync = require("lowdb/adapters/FileAsync");

async function initConnection() {
  const adapter = new FileAsync("db.json");
  const db = await low(adapter);

  // Set defaults
  db.defaults({ playlists: [], series: [], episodes: [] }).write();

  return db;
}

module.exports = { initConnection };
