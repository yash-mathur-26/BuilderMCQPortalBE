const express = require("express");

const {
  getAllTechnologiesController,
  createTechnologyController,
  updateTechnologyController,
} = require("../controllers/technology.controller");
const { isAuthorize } = require("../middleware/auth");

const router = express.Router();

router
  .route("/")
  .get(isAuthorize, getAllTechnologiesController)
  .post(isAuthorize, createTechnologyController)
  .patch(isAuthorize, updateTechnologyController);

module.exports = router;
