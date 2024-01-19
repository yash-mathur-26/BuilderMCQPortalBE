const db = require("../models");
const GlobalConfigs = db.GlobalConfigs;

exports.createConfig = async (body) => {
  return await GlobalConfigs.create(body);
};
