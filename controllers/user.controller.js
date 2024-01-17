require("dotenv").config();
const jwt = require("jsonwebtoken");

const userService = require("../services/user.service");
const { userSchema, loginSchema } = require("../validators/user.validate");
const cryptoUtil = require("../utils/crypto.util");

exports.createUserController = async (req, res) => {
  try {
    await userSchema.validate(req.body);
    const value = cryptoUtil.encryptText(req.body.password);
    req.body.password = value;
    const user = await userService.createUser(req.body);
    res.json({ data: user, status: "User created" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.loginController = async (req, res) => {
  try {
    await loginSchema.validate(req.body);
    const user = await userService.findUser(req.body);
    const pwd = cryptoUtil.decryptText(user.password);
    if (pwd !== req.body.password) {
      throw new Error("Password is incorrect !");
    }
    const token = jwt.sign({ id: user.id }, process.env.JWT_KEY, {
      expiresIn: "1h",
    });
    res.json({ data: { token, user }, status: "User logged In" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getUsersController = async (req, res) => {
  try {
    const user = await userService.getUsers();
    res.json({ data: user, status: "OK" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
