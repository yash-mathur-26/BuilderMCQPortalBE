"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      is_active: { type: DataTypes.STRING, defaultValue: "true" },
      technologyId: {
        type: DataTypes.INTEGER,
        references: { model: "technologies", key: "id" },
      },
    },
    {
      sequelize,
      modelName: "Users",
    }
  );
  return Users;
};
