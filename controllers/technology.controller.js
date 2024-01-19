const technologyService = require("../services/technology.service");
const technologySchema = require("../validators/technology.validate");

exports.getAllTechnologiesController = async (req, res) => {
  try {
    const technologies = await technologyService.getAllTechnologies();
    res.json({ data: technologies, status: "success" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.createTechnologyController = async (req, res) => {
  try {
    await technologySchema.validate(req.body);
    const user = await technologyService.createTechnology(req.body);
    res.json({ data: user, status: "technology created" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateTechnologyController = async (req, res) => {
  try {
    await technologyService.updateTechnology(req.query.id, req.body);
    res.json({ status: "Updated" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
