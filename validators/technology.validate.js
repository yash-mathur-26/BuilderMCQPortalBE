const yup = require("yup");

const technologySchema = yup.object().shape({
  name: yup.string().required(),
});

module.exports = technologySchema;
