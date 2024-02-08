const yup = require("yup");

exports.questionsSchema = yup.object().shape({
  question: yup.string().required(),
  technologyId: yup.number().required(),
  options: yup.string().required(),
  answer: yup.string().required(),
  codeSnippet: yup.string(),
  optionType: yup.string(),
});
