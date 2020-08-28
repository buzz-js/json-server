const { Router } = require("express");
const path = require("path");
const router = Router();
const multer = require("multer");
const shortid = require("shortid");

const { initConnection } = require("../database");

const storage = multer.diskStorage({
  destination: function (_, __, cb) {
    cb(null, path.join(__dirname, "uploads"));
  },
  filename: function (_, file, cb) {
    cb(null, `${shortid.generate()}${path.extname(file.originalname)}`);
  },
});

const upload = multer({ storage });

router.post("/", upload.single("video"), (req, res) => {
  res.send("uploadddd");
});

module.exports = router;
