const express = require("express");

const {
  getAllTechnologies,
  createTechnology,
} = require("../controllers/technology.controller");
const { isAuthorize } = require("../middleware/auth");

const router = express.Router();

router
  .route("/")
  .get(isAuthorize, getAllTechnologies)
  .post(isAuthorize, createTechnology);

module.exports = router;
