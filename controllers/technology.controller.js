const technologyService = require("../services/technology.service");
const technologySchema = require("../validators/technology.validate");

exports.getAllTechnologies = async (req, res) => {
  try {
    const technologies = await technologyService.getAllTechnologies();
    res.json({ data: technologies, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createTechnology = async (req, res) => {
    try {
      await technologySchema.validate(req.body);
      const user = await technologyService.createTechnology(req.body);
      res.json({ data: user, status: "created" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };