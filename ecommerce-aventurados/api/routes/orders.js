const express = require("express");
const router = express.Router();

const orders_controllers = require("../controllers/orders.controllers");
const { getAll ,addOrder} = orders_controllers;

router.get("/:id", getAll);
router.post("/", addOrder);

module.exports = router;
