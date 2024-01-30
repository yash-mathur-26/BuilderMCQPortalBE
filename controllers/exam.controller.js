const examStatService = require("../services/exam.service");
const { examStatsSchema } = require("../validators/examStats.validate");

exports.createExamStat = async (req, res) => {
  try {
    await examStatsSchema.validate(req.body);
    const examStat = await examStatService.createStat(req.body);
    res.json({ data: examStat, status: "Added" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateExamStat = async (req, res) => {
  try {
    const examStat = await examStatService.updateStat(req.body);
    res.json({ data: examStat, status: "Updated" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
