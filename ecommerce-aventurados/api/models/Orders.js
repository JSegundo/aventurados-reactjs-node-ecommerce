const { DataTypes, Model } = require("sequelize");
const db = require("../config/db");
const Carts = require("./Carts");
const States = require("./States");

class Orders extends Model {}

Orders.init(
  {
    voucher: {
      type: DataTypes.INTEGER,
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

Orders.addHook('afterCreate', (order) => {
  order.voucher = Math.random() * (10000000 - 999999999 + 1) + 999999999
})

module.exports = Orders;
