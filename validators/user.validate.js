const yup = require("yup");

const userSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().required(),
});

module.exports = userSchema;
