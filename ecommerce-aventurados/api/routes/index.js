const express = require("express");
const router = express.Router();
const users = require("./users");
const products = require("./products");
//const carrito = require("./carrito");
const categories = require("./categories");
const favorites = require("./favorites");

const carts = require('./carts');
const reviews = require('./reviews');

const orders = require("./orders");


router.use("/user", users);
router.use("/products", products);
router.use("/carts", carts);
router.use("/categories", categories);
router.use("/favorites", favorites);
router.use("/review", reviews);
router.use("/orders", orders);

module.exports = router;
