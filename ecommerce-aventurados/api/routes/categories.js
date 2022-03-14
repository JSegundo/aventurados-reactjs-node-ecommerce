const express = require("express");
const router = express.Router();

const categories_controllers = require("../controllers/categories.controllers");
const { getAll, findByCategory } = categories_controllers;

router.get("/", getAll);

router.get('/:id', findByCategory)

module.exports = router;
