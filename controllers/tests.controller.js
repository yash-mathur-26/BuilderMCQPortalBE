const testService = require("../services/tests.service");
const { testsSchema } = require("../validators/tests.validate");

exports.createTestController = async (req, res) => {
  try {
    await testsSchema.validate(req.body);
    const test = await testService.createTest(req.body);
    res.json({ data: test, status: "success" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getTestController = async (req, res) => {
  try {
    const filter = {};
    if (req.query.hasOwnProperty("technology")) {
      filter.technology = req.query.technology;
    }
    if (req.query.hasOwnProperty("userId")) {
      filter.userId = req.query.userId;
    }
    if (req.query.hasOwnProperty("isCompleted")) {
      filter.isCompleted = req.query.isCompleted === "true";
    }
    const tests = await testService.getTestByFilter(filter);
    res.json({ data: tests, status: "success" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateTestController = async (req, res) => {
  try {
    await testService.updateTestById(req.query.id, req.body);
    res.json({ status: "Updated" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
