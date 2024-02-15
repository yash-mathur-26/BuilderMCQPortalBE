const db = require("../models");
const Tests = db.Tests;
const Technology = db.technology;

exports.createTest = async (body) => {
  body.isActive = true;
  return await Tests.create(body);
};

exports.getTests = async () => {
  return await Tests.findAll({});
};

exports.getTestByTechnology = async (technology) => {
  const test = await Tests.findOne({ where: { isActive: true, technology } });
  const tech = await Technology.findByPk(test.dataValues.technology);
  delete test.dataValues.technology;
  test.dataValues.technology = tech.dataValues;
  return test.dataValues;
};
