const express = require("express");

const { isAuthorize } = require("../middleware/auth");
const {
  createQuestionsController,
  getQuestionsController,
  generateTestController,
  deleteQuestionController,
  updateQuestionController,
} = require("../controllers/questions.controller");

const router = express.Router();

router
  .route("/")
  .get(isAuthorize, getQuestionsController)
  .post(isAuthorize, createQuestionsController)
  .patch(isAuthorize, deleteQuestionController)
  .put(isAuthorize, updateQuestionController);
router.route("/generate-test").get(isAuthorize, generateTestController);
module.exports = router;
