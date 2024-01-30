const express = require("express");

const { isAuthorize } = require("../middleware/auth");
const {
  createExamStat,
  updateExamStat,
} = require("../controllers/exam.controller");

const router = express.Router();

router
  .route("/")
  .post(isAuthorize, createExamStat)
  .patch(isAuthorize, updateExamStat);

module.exports = router;
