const bcrypt = require("bcrypt");
require("dotenv").config();

const userService = require("../services/user.service");
const userSchema = require("../validators/user.validate");

exports.createUserController = async (req, res) => {
  try {
    await userSchema.validate(req.body);
    const salt = await bcrypt.genSalt(10);
    const value = await bcrypt.hash(req.body.password, salt);
    req.body.password = value;
    const user = await userService.createUser(req.body);
    res.json({ data: user, status: "user created" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
