const db = require("../models");
const ExamStats = db.examStats;
const Question = db.questions;

exports.createStat = async (body) => {
  const question = await Question.findByPk(body.questionId);
  if (body.isCorrect !== "skipped") {
    const answer = question.options.split(" | ");
    if (answer === question.answer) {
      body.isCorrect = "true";
    } else {
      body.isCorrect = "false";
    }
  }
  return await ExamStats.create(body);
};
