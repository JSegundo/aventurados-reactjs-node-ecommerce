const { Products, Categories } = require("../models");
const { Op } = require("sequelize");

const categories_controllers = {
  getAll: async (req, res, next) => {
    try {
      const categories = await Categories.findAll({
        where: { stateId: null },
        // where: { stateId: { [Op.ne]: 5 } },
      });
      return res.send(categories);
    } catch (err) {
      next(err);
    }
  },
  findByCategory: async (req, res, next) => {
    try {
      const products = await Products.findAll({
        where: { categoryId: req.params.id, stateId: { [Op.ne]: 5 } },
      });
      return res.send(products);
    } catch (err) {
      next(err);
    }
  },
  addCategory: async (req, res, next) => {
    req.body.stateId = 1;
    try {
      const category = await Categories.create(req.body);
      return res.status(202).send(category);
    } catch (err) {
      next(err);
    }
  },
  deleteOne: async (req, res, next) => {
    try {
      const [r, category] = await Categories.update(
        { stateId: 5 },
        { where: { id: req.params.id }, returning: true }
      );
      return res.status(202).send(category[0]);
    } catch (err) {
      next(err);
    }
  },
  editCategory: async (req, res, next) => {
    console.log(req.body);
    try {
      const [r, category] = await Categories.update(req.body, {
        where: { id: req.params.id },
        returning: true,
      });
      return res.status(202).send(category);
    } catch (err) {
      next(err);
    }
  },
  oneCategory: async (req, res, next) => {
    try {
      const category = await Categories.findByPk(req.params.id);
      return res.send(category);
    } catch (err) {
      next(err);
    }
  },
};

module.exports = categories_controllers;
