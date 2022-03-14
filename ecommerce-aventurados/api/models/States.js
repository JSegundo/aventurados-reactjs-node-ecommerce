const { Sequelize, DataTypes, Model } = require("sequelize");
const db = require("../config/db");

class States extends Model {}

States.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "states",
  }
);

module.exports = States;
