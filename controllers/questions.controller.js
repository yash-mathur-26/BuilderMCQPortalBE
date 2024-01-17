require("dotenv").config();
const { questionsSchema } = require("../validators/questions.validate");
const questionService = require("../services/question.service");

exports.createQuestionsController = async (req, res) => {
  try {
    await questionsSchema.validate(req.body);
    const question = await questionService.createQuestions(req.body);
    res.json({ data: question, status: "Question created" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getQuestionsController = async (req, res) => {
  try {
    const questions = await questionService.getQuestions();
    res.json({ data: questions, status: "OK" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
