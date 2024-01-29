"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("ExamStats", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      questionId: {
        type: Sequelize.INTEGER,
        references: { model: "questions", key: "id" },
      },
      answer: Sequelize.STRING,
      userId: {
        type: Sequelize.INTEGER,
        references: { model: "users", key: "id" },
      },
      isCorrect: Sequelize.STRING,
      testId: {
        type: Sequelize.INTEGER,
        references: { model: "tests", key: "id" },
      },
      isActive: Sequelize.BOOLEAN,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("ExamStats");
  },
};
