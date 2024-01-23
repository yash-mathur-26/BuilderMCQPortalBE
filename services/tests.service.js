const db = require("../models");
const Tests = db.Tests;

exports.createTest = async (body) => {
  return await Tests.create(body);
};

exports.getTests = async () => {
  return await Tests.findAll({
    include: [
      {
        model: db.Users,
        as: "users",
        attributes: ["name", "email"],
      },
    ],
  });
};
