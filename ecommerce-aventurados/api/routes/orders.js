const express = require("express");
const router = express.Router();

const orders_controllers = require("../controllers/orders.controllers");
const { getAll ,addOrder,getAdminAll} = orders_controllers;

router.get("/:id", getAll);
router.post("/", addOrder);

//ruta de admin
router.get("/", getAdminAll);


module.exports = router;
