const yup = require("yup");

exports.testsSchema = yup.object().shape({
  technology: yup.number().required(),
  score: yup.number().required(),
  startDate: yup.string().required(),
  endDate: yup.string().required(),
  duration: yup.number().required(),
});
