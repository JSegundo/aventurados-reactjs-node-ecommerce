const express = require("express");
const router = express.Router();
//const { Carts, Products, Ordenes } = require("../models");

const carts_controllers = require("../controllers/carts.controllers");
const { getAllProducts, addProduct, deleteProduct, editCantidad } = carts_controllers;

router.get("/all", getAllProducts);

router.post("/add", addProduct);

router.delete("/del",deleteProduct);

router.put("/amount", editCantidad);





module.exports = router;
