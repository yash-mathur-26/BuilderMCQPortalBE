const express = require("express");

const {
  getAllTechnologies,
  createTechnology,
} = require("../controllers/technology.controller");

const router = express.Router();

router.route("/").get(getAllTechnologies).post(createTechnology);

module.exports = router;
