const db = require("../models");
const Questions = db.Questions;

exports.createQuestions = async (body) => {
  return await Questions.create(body);
};

exports.getQuestions = async () => {
  return await Questions.findAll({ where: { isActive: true } });
};

exports.getRandomQuestions = async () => {
  return await Questions.findAll({
    where: { isActive: true },
    order: db.Sequelize.literal("rand()"),
    limit: 5,
  });
};

exports.deleteQuestion = async (body) => {
  return await Questions.update(
    { isActive: false },
    { where: { id: body.id } }
  );
};
