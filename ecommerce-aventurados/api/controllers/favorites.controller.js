const { Favorites, Users, Products } = require("../models");

const favorites_controllers = {
  getAll: async (req, res, next) => {
    const { userId } = req.body;
    try {
      const favorites = await Favorites.findAll({
        where: { userId, vigente: true },
        include: [{ model: Users }, { model: Products }],
      });
      return res.send(favorites);
    } catch (err) {
      next(err);
    }
  },

  addFavorite: async (req, res, next) => {
    const { userId, productId } = req.body;
    try {
      const newFavorite = await Favorites.create({ userId, productId });
      return res.status(202).send(newFavorite);
    } catch (err) {
      next(err);
    }
  },

  deleteOne: async (req, res, next) => {
    try {
      const [r, favorite] = await Favorites.update(
        { vigente: false },
        { where: { id: req.params.id }, returning: true }
      );
      return res.send(202).send(favorite[0]);
    } catch (err) {
      next(err);
    }
  },
};

module.exports = favorites_controllers;
