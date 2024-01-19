const db = require("../models");
const Technology = db.Technology;

exports.getAllTechnologies = async () => {
  return await Technology.findAll();
};

exports.createTechnology = async (body) => {
  return await Technology.create(body);
};

exports.updateTechnology = async (id, body) => {
  return await Technology.update(
    {
      name: body?.name,
      duration: body?.duration,
      noOfQuestions: body?.noOfQuestions,
      cutOff: body?.cutOff,
    },
    { where: { id } }
  );
};
