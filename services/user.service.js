const db = require("../models");
const User = db.Users;
const Technology = db.technology;

exports.createUser = async (body) => {
  return await User.create(body);
};

exports.findUser = async (body) => {
  const user = await User.findOne({
    where: { email: body.email, is_active: "true" },
  });
  const tech = await Technology.findByPk(user.dataValues.technologyId);
  user.dataValues.technology = tech;
  delete user.dataValues.technologyId;
  return user;
};

exports.getUsers = async () => {
  return await User.findAll({ is_active: "true" });
};
