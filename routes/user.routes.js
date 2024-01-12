const express = require("express");

const {
  createUserController
} = require("../controllers/user.controller");

const router = express.Router();

router.route("/").post(createUserController);

module.exports = router;
