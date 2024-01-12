const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const db = require("./models");
db.sequelize.sync();

const technologyRoute = require("./routes/technology.routes");
const userRoute = require("./routes/user.routes");

// setting middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//configure routes
app.use("/api/technologies", technologyRoute);
app.use("/api/users", userRoute);

// setting error path
app.use((req, res, next) => {
  const err = new Error(`${req.url} not found in this server`);
  err.status = 404;
  next(err);
});
// setting another error program
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ error: err.message });
});

// export app
module.exports = app;
