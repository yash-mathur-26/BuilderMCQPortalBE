const yup = require("yup");

exports.userSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().required(),
  technologyId: yup.number().required(),
});

exports.loginSchema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
});
