require("dotenv").config();
const { questionsSchema } = require("../validators/questions.validate");
const questionService = require("../services/question.service");

exports.createQuestionsController = async (req, res) => {
  try {
    await questionsSchema.validate(req.body);
    const question = await questionService.createQuestions(req.body);
    res.json({ data: question, status: "Added" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getQuestionsController = async (req, res) => {
  try {
    console.log("REQ ===> ", req.query.hasOwnProperty("technology"));
    let questions;
    if (req.query.hasOwnProperty("technology")) {
      questions = await questionService.getQuestionByTechnology(
        req.query.technology
      );
    } else {
      questions = await questionService.getQuestions();
    }
    res.json({ data: questions, status: "Success" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.generateTestController = async (req, res) => {
  try {
    const questions = await questionService.getRandomQuestions(
      req.query.technology
    );
    res.json({ data: questions, status: "Success" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteQuestionController = async (req, res) => {
  try {
    await questionService.deleteQuestion(req.body);
    res.json({ status: "Deleted" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateQuestionController = async (req, res) => {
  try {
    await questionService.updateQuestion(req.query.id, req.body);
    res.json({ status: "Updated" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
