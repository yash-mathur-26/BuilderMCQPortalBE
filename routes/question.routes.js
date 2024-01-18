const express = require("express");

const {} = require("../controllers/technology.controller");
const { isAuthorize } = require("../middleware/auth");
const {
  createQuestionsController,
  getQuestionsController,
  generateTestController,
  deleteQuestionController,
} = require("../controllers/questions.controller");

const router = express.Router();

router
  .route("/")
  .get(isAuthorize, getQuestionsController)
  .post(isAuthorize, createQuestionsController).patch(isAuthorize, deleteQuestionController);
router.route("/generate-test").get(isAuthorize, generateTestController);
module.exports = router;
