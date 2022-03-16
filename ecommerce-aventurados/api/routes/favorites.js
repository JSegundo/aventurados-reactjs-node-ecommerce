const express = require("express");
const router = express.Router();

const favorites_controllers = require("../controllers/favorites.controller.js");
const { getAll, addFavorite, deleteOne } = favorites_controllers;

router.get("/:userId", getAll);

router.post("/:userId/:productId", addFavorite);

router.delete("/:userId/:productId", deleteOne);

module.exports = router;
