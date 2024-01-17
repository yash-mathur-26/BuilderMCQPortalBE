const db = require("../models");
const Questions = db.Questions;

exports.createQuestions = async (body) => {
  return await Questions.create(body);
};

exports.getQuestions = async () => {
  return await Questions.findAll();
};
