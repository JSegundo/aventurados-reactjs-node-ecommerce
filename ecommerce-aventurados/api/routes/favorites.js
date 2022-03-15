const express = require("express");
const router = express.Router();

const favorites_controllers = require("../controllers/favorites.controller.js");
const { getAll, addFavorite, deleteOne } = favorites_controllers;

router.get("/", getAll);

router.post("/", addFavorite);

router.delete("/:id", deleteOne);

module.exports = router;
