const { Router } = require("express");
const router = Router();

// Import controllers
const serieController = require("../controllers/serieController");
const episodeController = require("../controllers/episodeController");
const serieEpisodeController = require("../controllers/serieEpisodeController");

router.get("/", (_, res) => res.send("Hello"));

router.get("/series", serieController.index);
router.post("/series", serieController.store);
router.get("/series/:id", serieController.show);
router.get("/series/:id/episodes", serieEpisodeController.index);

router.get("/episodes", episodeController.index);
router.post("/episodes", episodeController.store);
router.get("/episodes/:id", episodeController.show);

module.exports = router;
