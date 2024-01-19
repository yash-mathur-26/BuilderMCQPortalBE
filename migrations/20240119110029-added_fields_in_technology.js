"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.addColumn("Technologies", "duration", {
      type: Sequelize.INTEGER,
    });
    queryInterface.addColumn("Technologies", "noOfQuestions", {
      type: Sequelize.INTEGER,
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.removeColumn("Technologies", "duration");
    queryInterface.removeColumn("Technologies", "noOfQuestions");
  },
};
