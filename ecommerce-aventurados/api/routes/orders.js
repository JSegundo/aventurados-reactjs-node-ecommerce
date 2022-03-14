const express = require("express");
const router = express.Router();

const order_controllers = require("../controllers/orders.controllers");
const { getAll } = order_controllers;

router.get("/:id", getAll);

module.exports = router;
