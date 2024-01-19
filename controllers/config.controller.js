const configService = require("../services/config.service");
const { globalConfigSchema } = require("../validators/globalConfig.validate");

exports.createConfigController = async (req, res) => {
  try {
    await globalConfigSchema.validate(req.body);
    const config = await configService.createConfig(req.body);
    res.json({ data: config, status: "Added" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
