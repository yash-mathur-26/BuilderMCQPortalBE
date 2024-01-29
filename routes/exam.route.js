const express = require("express");

const { isAuthorize } = require("../middleware/auth");
const { createExamStat } = require("../controllers/exam.controller");

const router = express.Router();

router.route("/").post(isAuthorize, createExamStat);

module.exports = router;
