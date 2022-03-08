const express = require("express");
const router = express.Router();
const users = require("./users");
const products = require("./products");
const carrito = require('./carrito')

router.use("/user", users);
router.use("/products", products);
router.use('/carrito', carrito)

module.exports = router;
