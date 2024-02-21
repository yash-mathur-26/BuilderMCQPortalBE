const db = require("../models");
const Tests = db.Tests;
const Technology = db.technology;
const User = db.Users;

exports.createTest = async (body) => {
  body.isActive = true;
  return await Tests.create(body);
};

exports.getTestByFilter = async (filter) => {
  const tests = await Tests.findAll({
    where: {
      isActive: true,
      ...filter,
    },
  });
  if (tests) {
    return Promise.all(
      tests.map(async (test) => {
        const tech = await Technology.findByPk(test?.dataValues?.technology);
        const user = await User.findByPk(test?.dataValues?.userId);
        delete test?.dataValues?.technology;
        delete test?.dataValues?.userId;
        if (user) {
          test.dataValues.user = user?.dataValues;
        }
        if (tech) {
          test.dataValues.technology = tech?.dataValues;
        }
        return test;
      })
    );
  }
  return [];
};

exports.updateTestById = async (testId, body) => {
  await Tests.update(
    {
      userId: body?.userId,
      technology: body?.technology,
      score: body?.score,
      startDate: body?.startDate,
      endDate: body?.endDate,
      duration: body?.duration,
      isCompleted: body?.isCompleted,
    },
    { where: { id: testId } }
  );
  const test = await Tests.findByPk(testId);
  return test.dataValues;
};
