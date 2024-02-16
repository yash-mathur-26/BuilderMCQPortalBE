const db = require("../models");
const ExamStats = db.examStats;
const Question = db.questions;
const User = db.Users;
const Technology = db.technology;

exports.createStat = async (body) => {
  const question = await Question.findByPk(body.questionId);
  if (body.isCorrect !== "skipped") {
    body.isCorrect = body.answer === question.answer ? "true" : "false";
  }
  return await ExamStats.create(body);
};

exports.updateStat = async (body) => {
  const question = await Question.findByPk(body.questionId);
  if (body.isCorrect !== "skipped") {
    body.isCorrect = body.answer === question.answer ? "true" : "false";
  }
  return await ExamStats.update(body, { where: { id: body.id } });
};

exports.getExamStats = async () => {
  const exams = await ExamStats.findAll({});
  const finalResponse = exams.map(async (exam) => {
    const tech = await Technology.findByPk(exam.dataValues.technology);
    const user = await User.findByPk(exam.dataValues.userId);
    delete exam.dataValues.technology;
    delete exam.dataValues.userId;
    exam.dataValues.user = user.dataValues;
    exam.dataValues.technology = tech.dataValues;
    return exam;
  });
  return await Promise.all(finalResponse);
};

exports.getExamByFilter = async (filter) => {
  const exam = await ExamStats.findOne({
    where: { isActive: true, ...filter },
  });
  if (exam) {
    const tech = await Technology.findByPk(exam?.dataValues?.technology);
    const user = await User.findByPk(exam?.dataValues?.userId);
    delete exam?.dataValues?.technology;
    delete exam?.dataValues?.userId;
    if (user && tech) {
      exam.dataValues.user = user?.dataValues;
      exam.dataValues.technology = tech?.dataValues;
    }
    return exam.dataValues;
  }
  return [];
};
