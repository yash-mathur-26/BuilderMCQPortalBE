const express = require("express");

const {} = require("../controllers/technology.controller");
const { isAuthorize } = require("../middleware/auth");
const {
  createQuestionsController, getQuestionsController,
} = require("../controllers/questions.controller");

const router = express.Router();

router
  .route("/")
  .get(isAuthorize, getQuestionsController)
  .post(isAuthorize, createQuestionsController);

module.exports = router;
