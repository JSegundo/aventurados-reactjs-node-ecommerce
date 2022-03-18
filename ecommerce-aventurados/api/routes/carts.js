const express = require("express");
const router = express.Router();
//const { Carts, Products, Ordenes } = require("../models");

const carts_controllers = require("../controllers/carts.controllers");
const { getAllProducts, addProduct, deleteProduct, subtractAmount } = carts_controllers;

router.get("/all/:userId", getAllProducts);

router.post("/add/:userId/:productId/", addProduct);

router.delete("/del/:userId/:cartId",deleteProduct);

router.put("/:userId/:cartId/", subtractAmount);



module.exports = router;
