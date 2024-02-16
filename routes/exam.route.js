const express = require("express");

const { isAuthorize } = require("../middleware/auth");
const {
  createExamStat,
  updateExamStat,
  getExamStats
} = require("../controllers/exam.controller");

const router = express.Router();

router
  .route("/")
  .get(isAuthorize, getExamStats)
  .post(isAuthorize, createExamStat)
  .patch(isAuthorize, updateExamStat);

module.exports = router;
