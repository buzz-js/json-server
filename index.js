const express = require("express");
const morgan = require("morgan");
const path = require("path");

const app = express();

const { initConnection } = require("./database");

// Init database connection
app.use(async (_, __, next) => {
  try {
    await initConnection();
    next();
  } catch (error) {
    console.error(error);
  }
});

// Middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.get("/", (_, res) =>
  res.sendFile(path.join(__dirname, "public/index.html"))
);

app.use("/uploads", require("./routes/uploads"));
app.use("/api", require("./routes/api"));

app.listen("1802", () => console.log("Server listening"));
