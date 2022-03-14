const express = require("express");
const router = express.Router();
const users = require("./users");
const products = require("./products");
const carrito = require("./carrito");
const categories = require("./categories");
const favorites = require("./favorites");

router.use("/user", users);
router.use("/products", products);
router.use("/cart", carrito);
router.use("/categories", categories);
router.use("/favorites", favorites);

module.exports = router;
