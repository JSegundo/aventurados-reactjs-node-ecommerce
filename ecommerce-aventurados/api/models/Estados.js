const { Sequelize, DataTypes, Model } = require("sequelize");
const db = require("../config/db");

class Estados extends Model {}

Estados.init(
  {
    Descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "estados",
  }
);

module.exports = Estados;
