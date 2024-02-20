const db = require("../models");
const Tests = db.Tests;
const Technology = db.technology;
const User = db.Users;

exports.createTest = async (body) => {
  body.isActive = true;
  return await Tests.create(body);
};

exports.getTests = async () => {
  const tests = await Tests.findAll({});
  const finalResponse = tests.map(async (test) => {
    const tech = await Technology.findByPk(test.dataValues.technology);
    const user = await User.findByPk(test.dataValues.userId);
    delete test.dataValues.technology;
    delete test.dataValues.userId;
    test.dataValues.user = user.dataValues;
    test.dataValues.technology = tech.dataValues;
    return test;
  });
  return await Promise.all(finalResponse);
};

exports.getTestByFilter = async (filter) => {
  const tests = await Tests.findAll({
    where: {
      isActive: true,
      ...filter,
    },
  });
  console.log("TESTS =====> ", tests);
  if (tests) {
    const finalResponse = Promise.all(
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
        console.log("AFTER MODIFICATION =====>", test);
        return test;
      })
    );
    console.log("FINAL REPOSNE =====> ", finalResponse);
    return finalResponse;
  }
  return [];
};

exports.updateTestById = async (testId, body) => {
  return await Tests.update(
    {
      userId: body?.userId,
      technology: body?.technology,
      score: body?.score,
      startDate: body?.startDate,
      endDate: body?.endDate,
      duration: body?.duration,
    },
    { where: { id: testId } }
  );
};
