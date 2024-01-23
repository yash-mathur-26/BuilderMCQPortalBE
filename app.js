const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const db = require("./models");
db.sequelize.sync();

const technologyRoute = require("./routes/technology.routes");
const userRoute = require("./routes/user.routes");
const questionsRoute = require("./routes/question.routes");
const globalConfigRoute = require("./routes/config.routes");
const testRoute = require("./routes/test.routes");

//Configure CORS options
var corsOptions = {
  origin: "http://localhost:3000",
};

// setting middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors(corsOptions));

//configure routes
app.use("/api/technologies", technologyRoute);
app.use("/api/users", userRoute);
app.use("/api/questions", questionsRoute);
app.use("/api/global-config", globalConfigRoute);
app.use("/api/tests", testRoute);

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
