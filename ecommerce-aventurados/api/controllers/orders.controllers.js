const { Orders, Carts } = require("../models");

const users_controllers = {
  getAll: async (req, res, next) => {
    const { id } = req.params;
    try {
      const orders = await Orders.findAll({
        where: { userId: id },
        order: [["userId", "DESC"]],
      });
      return res.send(orders);
    } catch (err) {
      next(err);
    }
  },
};

module.exports = users_controllers;
