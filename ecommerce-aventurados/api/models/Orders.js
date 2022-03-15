const { DataTypes, Model } = require("sequelize");
const db = require("../config/db");
const Carts = require("./Carts");
const States = require("./States");

class Orders extends Model {}

Orders.init(
  {
 /*   cartId: {
      type: DataTypes.INTEGER,
      references: {
        model: Carts,
        key: "id",
      },
    },
 */   voucher: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    amount: {
      type: DataTypes.INTEGER,
    },
    state: {
      type: DataTypes.INTEGER,
      references: {
        model: States,
        key: "id",
      },
    },
    transaction: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    // Other model options go here
    sequelize: db, // We need to pass the connection instance
    // tableName: 'users', // We need to choose the model name
    modelName: "orders",
  }
);

module.exports = Orders;
