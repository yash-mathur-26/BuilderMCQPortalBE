const express = require("express");

const { isAuthorize } = require("../middleware/auth");
const {
  createTestController,
  getTestController,
  updateTestController
} = require("../controllers/tests.controller");

const router = express.Router();

router
  .route("/")
  .post(isAuthorize, createTestController)
  .get(isAuthorize, getTestController)
  .patch(isAuthorize, updateTestController);

module.exports = router;
