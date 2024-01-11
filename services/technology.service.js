const db = require("../models");
const Technology = db.Technology;

exports.getAllTechnologies = async () => {
  return await Technology.findAll();
};

exports.createTechnology = async (body) => {
  return await Technology.create(body);
};
