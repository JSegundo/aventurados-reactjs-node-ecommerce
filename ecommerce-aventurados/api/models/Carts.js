const { DataTypes, Model } = require("sequelize");
const Users = require("./Users");
const db = require("../config/db");
const States = require("./States");
const Products = require("./Products");

class Carts extends Model {}

Carts.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: Users,
        key: "id",
      },
    },
    productId: {
      type: DataTypes.INTEGER,
      references: {
        model: Products,
        key: "id",
      },
    },
    amount: {
      type: DataTypes.INTEGER,
    },
    state: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      references: {
        model: States,
        key: "id",
      },
    },
    transaction: {
      type: DataTypes.INTEGER,
      //allowNull: false,
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
