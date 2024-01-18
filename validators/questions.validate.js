const yup = require("yup");

exports.questionsSchema = yup.object().shape({
  question: yup.string().required(),
  technology: yup.number().required(),
  options: yup.string().required(),
  answer: yup.string().required(),
  codeSnippet: yup.string(),
});
