const { DataTypes, Model } = require("sequelize");
const db = require("../config/db");

class Favorites extends Model {}

Favorites.init(
  {
    vigente: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    sequelize: db,
    modelName: "favorites",
  }
);

module.exports = Favorites;
