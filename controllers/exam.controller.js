const examStatService = require("../services/exam.service");
const { examStatsSchema } = require("../validators/examStats.validate");

exports.createExamStat = async (req, res) => {
  try {
    await examStatsSchema.validate(req.body);
    const config = await examStatService.createStat(req.body);
    res.json({ data: config, status: "Added" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
