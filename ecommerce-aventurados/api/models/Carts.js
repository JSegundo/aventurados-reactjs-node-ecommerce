const { DataTypes, Model } = require("sequelize");
const Users = require("./Users");
const db = require("../config/db");
const States = require("./States");
const Products = require("./Products");

class Carts extends Model {}

Carts.init(
  {
    amount: {
      type: DataTypes.INTEGER,
      defaultValue: 1
    },
  },
  {
    // Other model options go here
    sequelize: db, // We need to pass the connection instance
    // tableName: 'users', // We need to choose the model name
    modelName: "carts",
  }
);

module.exports = Carts;
