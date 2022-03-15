const express = require("express");
const router = express.Router();
//const { Carts, Products, Ordenes } = require("../models");

const carts_controllers = require("../controllers/carts.controllers");
const { getAllProducts, addProduct, deleteProduct, deleteOne, editCantidad } = carts_controllers;

router.get("/", getAllProducts);

router.post("/", addProduct);

router.delete("/",deleteProduct);

router.put("/", editCantidad);





module.exports = router;
