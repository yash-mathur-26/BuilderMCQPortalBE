const yup = require("yup");

exports.examStatsSchema = yup.object().shape({
  questionId: yup.number().required(),
  answer: yup.string().required(),
  userId: yup.number().required(),
  testId: yup.number().required(),
});
