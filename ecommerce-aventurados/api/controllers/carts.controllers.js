const { Carts, Products, Users, Categories } = require("../models");
const { Op } = require("sequelize");

const carts_controllers = {
  addProduct: async (req, res, next) => {
    const { productId, userId } = req.params;
    try {
      const carts = await Carts.findAll({
        where: { userId, productId },
        include: [{ model: Users }, { model: Products }],
      });
      if (carts.length > 0) {
        const [r, updateCart] = await Carts.update(
          { amount: carts[0].dataValues.amount + 1 },
          { where: { id: carts[0].dataValues.id }, returning: true }
        );
        return res.status(202).send(updateCart[0]);
      }
      const newCart = await Carts.create({ productId, userId });
      return res.status(202).send(newCart);
    } catch (err) {
      next(err);
    }
  },

  deleteProduct: async (req, res, next) => {
    const { userId, cartId } = req.params;
    try {
      const cart = await Carts.findOne({ where: { id: cartId } });
      const deleteCart = cart;
      cart.destroy();
      return res.status(202).send({ id: deleteCart.id });
    } catch (err) {
      next(err);
    }
  },

  subtractAmount: async (req, res, next) => {
    const { userId, cartId } = req.params;
    try {
      const carts = await Carts.findOne({
        where: { userId },
        include: [{ model: Users }, { model: Products }],
      });
      console.log('CARTSS =>', carts.dataValues.amount)
      const [r, updateCart] = await Carts.update(
        { amount: carts.dataValues.amount - 1 },
        { where: { id: cartId }, returning: true }
      );
      return res.status(202).send(updateCart[0]);
    } catch (err) {
      next(err);
    }
  },
  getAllProducts: async (req, res, next) => {
    try {
      const userProd = await Carts.findAll({
        where: { userId: req.params.userId },
        include: [{ model: Users }, { model: Products }],
      });
      return res.send(userProd);
    } catch (err) {
      next(err);
    }
  },
};

module.exports = carts_controllers;
