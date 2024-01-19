const yup = require("yup");

exports.globalConfigSchema = yup.object().shape({
  noOfQuestions: yup.number().required(),
  duration: yup.number().required(),
  cutOff: yup.number().required(),
});
