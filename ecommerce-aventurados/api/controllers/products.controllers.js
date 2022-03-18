const { Products, States, Categories } = require("../models");
const { Op } = require("sequelize");

const products_controllers = {
  getAll: async (req, res, next) => {
    try {
      const products = await Products.findAll({
        include: [{ model: States }, { model: Categories }],
        where: {
          stateId: { [Op.ne]: 5 }, //el valor 5 es borrado. usamos estados para no borrar y perder las referencias.
        },
      });
      return res.send(products);
    } catch (err) {
      next(err);
    }
  },

  getBestSeller: async (req, res, next) => {
    try {
      const products = await Products.findAll({
        include: [{ model: States }, { model: Categories }],
        order: [["rating", "DESC"]],
        limit: 4,
        where: {
          stateId: { [Op.ne]: 5 }, //el valor 4 es borrado. usamos estados para no borrar y perder las referencias.
        },
      });
      return res.send(products);
    } catch (err) {
      next(err);
    }
  },
  getOne: async (req, res, next) => {
    const { id } = req.params;
    try {
      const product = await Products.findByPk(id);
      return res.send(product);
    } catch (err) {
      next(err);
    }
  },
  addProduct: async (req, res, next) => {
    req.body.stateId = 1; //set default state ('create')
    try {
      const newProduct = await Products.create(req.body);
      return res.status(202).send(newProduct);
    } catch (err) {
      next(err);
    }
  },
  deleteOne: async (req, res, next) => {
    try {
      const [r, product] = await Products.update(
        { stateId: 5 },
        { where: { id: req.params.id }, returning: true }
      );
      return res.status(202).send(product[0]);
    } catch (err) {
      next(err);
    }
  },
  editProduct: async (req, res, next) => {
    console.log(req.params.id);
    console.log(req.body);
    try {
      const [r, product] = await Products.update(req.body, {
        where: { id: req.params.id },
        returning: true,
      });
      return res.status(202).send(product[0]);
    } catch (err) {
      next(err);
    }
  },
  search: async (req, res, next) => {
    try {
      const { name } = req.query;
      const products = await Products.findAll({
        include: [{ model: Categories }],
        where: { name: { [Op.startsWith]: name }, stateId: { [Op.ne]: 5 } },
      });
      return res.send(products[0]);
    } catch (err) {
      next(err);
    }
  },
};

module.exports = products_controllers;
