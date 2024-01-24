"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Questions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  }
  Questions.init(
    {
      question: DataTypes.STRING,
      technologyId: {
        type: DataTypes.INTEGER,
        references: { model: "technologies", key: "id" },
      },
      options: DataTypes.STRING,
      answer: DataTypes.STRING,
      codeSnippet: DataTypes.STRING,
      isActive: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Questions",
    }
  );
  return Questions;
};
