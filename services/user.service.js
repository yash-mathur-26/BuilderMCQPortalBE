const db = require("../models");
const User = db.Users;

exports.createUser = async (body) => {
  return await User.create(body);
};
