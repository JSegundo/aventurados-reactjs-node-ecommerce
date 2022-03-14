const express = require("express");
const router = express.Router();

const categories_controllers = require("../controllers/categories.controllers");
const { getAll, findByCategory, addCategory, deleteOne, editCategory } = categories_controllers;

router.get("/", getAll);

router.get('/:id', findByCategory)

//Routes for admin
router.post('/', addCategory)

router.delete('/:id', deleteOne)

router.put('/:id', editCategory)

module.exports = router;
