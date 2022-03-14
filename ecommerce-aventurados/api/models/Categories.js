const { DataTypes, Model } = require("sequelize");
const db = require("../config/db");

class Categories extends Model {}

Categories.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "categories",
  }
);

module.exports = Categories;
