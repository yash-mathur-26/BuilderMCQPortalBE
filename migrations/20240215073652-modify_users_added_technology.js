"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.addColumn("Users", "technologyId", {
      type: Sequelize.INTEGER,
      references: { model: "technologies", key: "id" },
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.removeColumn("Users", "technologyId");
  },
};
