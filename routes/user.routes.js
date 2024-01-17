const express = require("express");

const {
  createUserController,
  loginController,
  getUsersController,
} = require("../controllers/user.controller");
const { isAuthorize } = require("../middleware/auth");

const router = express.Router();

router
  .route("/")
  .post(createUserController)
  .get(isAuthorize, getUsersController);
router.route("/login").post(loginController);

module.exports = router;
