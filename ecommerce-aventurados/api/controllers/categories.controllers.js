const { Products, Categories } = require("../models");
const { Op } = require("sequelize");

const categories_controllers = {
  getAll: async (req, res, next) => {
    try {
      const categories = await Categories.findAll();
      return res.send(categories);
    } catch (err) {
      next(err);
    }
  },
  findByCategory: async (req, res, next) => {
    try {
      const products = await Products.findAll({
        where: { categoryId: req.params.id, stateId: { [Op.ne]: 4 } },
      });
      return res.send(products);
    } catch (err) {
      next(err);
    }
  },
};

module.exports = categories_controllers;
