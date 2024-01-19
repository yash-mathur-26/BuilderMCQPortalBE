"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.addColumn("Technologies", "cutOff", {
      type: Sequelize.INTEGER,
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.removeColumn("Technologies", "cutOff");
  },
};
