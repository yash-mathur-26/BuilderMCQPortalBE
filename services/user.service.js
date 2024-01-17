const db = require("../models");
const User = db.Users;

exports.createUser = async (body) => {
  return await User.create(body);
};

exports.findUser = async (body) => {
  return await User.findOne({
    where: { email: body.email, is_active: "true" },
  });
};

exports.getUsers = async () => {
  return await User.findAll({ is_active: "true" });
};
