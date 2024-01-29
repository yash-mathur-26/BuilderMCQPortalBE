"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ExamStats extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ExamStats.init(
    {
      questionId: {
        type: DataTypes.INTEGER,
        references: { model: "questions", key: "id" },
      },
      answer: DataTypes.STRING,
      userId: {
        type: DataTypes.INTEGER,
        references: { model: "users", key: "id" },
      },
      isCorrect: DataTypes.STRING,
      testId: {
        type: DataTypes.INTEGER,
        references: { model: "tests", key: "id" },
      },
      isActive: { type: DataTypes.BOOLEAN, defaultValue: true },
    },
    {
      sequelize,
      modelName: "ExamStats",
    }
  );
  return ExamStats;
};
