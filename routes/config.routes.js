const express = require("express");

const { isAuthorize } = require("../middleware/auth");
const { createConfigController } = require("../controllers/config.controller");

const router = express.Router();

router.route("/").post(isAuthorize, createConfigController);

module.exports = router;
