const { Favorites, Users, Products } = require("../models");

const favorites_controllers = {
  getAll: async (req, res, next) => {
    const { userId } = req.params;
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
    const { userId, productId } = req.params;
    try {
      const newFavorite = await Favorites.create({ userId, productId });
      const favoriteToReturn = await Favorites.findAll({
        where: { id: newFavorite.id },
        include: [{ model: Users }, { model: Products }],
      });
      return res.status(202).send(favoriteToReturn[0]);
    } catch (err) {
      next(err);
    }
  },

  deleteOne: async (req, res, next) => {
    const { userId, productId } = req.params;
    try {
      const favorite = await Favorites.findOne({
        where: { userId, productId },
      });
      const deleteFavorite = favorite;
      favorite.destroy();
      return res.status(202).send({ id: deleteFavorite.id });
    } catch (err) {
      next(err);
    }
  },
};

module.exports = favorites_controllers;
