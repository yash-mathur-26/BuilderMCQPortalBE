const express = require("express");

const {
  createUserController,
  loginController
} = require("../controllers/user.controller");

const router = express.Router();

router.route("/").post(createUserController);
router.route("/login").post(loginController);

module.exports = router;
