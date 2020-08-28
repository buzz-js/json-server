const express = require("express");
const morgan = require("morgan");

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
app.use("/api", require("./routes"));

app.listen("1802", () => console.log("Server listening"));
