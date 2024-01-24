"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.renameColumn("Questions", "technology", "technologyId");
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.renameColumn(
      "Questions",
      "technologyId",
      "technology"
    );
  },
};
