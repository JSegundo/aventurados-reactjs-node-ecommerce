const express = require("express");
const router = express.Router();

const products_controllers = require("../controllers/products.controllers");
const {
  getAll,
  getOne,
  addProduct,
  deleteOne,
  editProduct,
  search,
  getBestSeller,
} = products_controllers;

router.get("/search", search);

router.get("/", getAll);

router.get("/best", getBestSeller);

router.get("/:id", getOne);

//Routes for admin
router.post("/", addProduct);

router.delete("/:id", deleteOne);

router.put("/edit/:id", editProduct);

module.exports = router;
