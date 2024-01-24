const db = require("../models");
const Questions = db.questions;
const GlobalConfig = db.GlobalConfigs;
const Technology = db.technology;

exports.createQuestions = async (body) => {
  return await Questions.create(body);
};

exports.getQuestions = async () => {
  const questions =  await Questions.findAll({
    // include: { model: Technology },
    where: { isActive: true },
  });
};

exports.getRandomQuestions = async (id) => {
  let technology;
  technology = await Technology.findOne({ where: { id } });
  if (!technology.noOfQuestions && !technology.duration && !technology.cutOff) {
    technology = await GlobalConfig.findOne({ where: { isActive: true } });
  }
  const questions = await Questions.findAll({
    where: { isActive: true, technology: id },
    order: db.Sequelize.literal("rand()"),
    limit: technology.noOfQuestions,
  });
  return {
    questions,
    duration: technology.duration,
    cutOff: technology.cutOff,
  };
};

exports.deleteQuestion = async (body) => {
  return await Questions.update(
    { isActive: false },
    { where: { id: body.id } }
  );
};

exports.updateQuestion = async (id, body) => {
  return await Questions.update(
    {
      question: body?.question,
      technology: body?.technology,
      options: body?.options,
      answer: body?.answer,
      codeSnippet: body?.codeSnippet,
    },
    { where: { id } }
  );
};
