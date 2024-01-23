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
    const tests = await testService.getTests();
    res.json({ data: tests, status: "success" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
