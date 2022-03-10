const express = require("express");
const router = express.Router();
const { Carritos, Products, Ordenes } = require("../models");

router.post("/", (req, res) => { 
  //if (!req.user.admin == true) return res.sendStatus(401);
  //if (!req.user) res.sendStatus(401)
  //const {productId, cantidad} = req.body
  Carritos.create({userId: req.user.id, productId, cantidad})
  .then( carrito => res.status(201).send(carrito))
  .catch(err => console.log(err))
  //res.send('producto en carrito')
});

router.delete("/:id", (req, res) => {
  //id de params es de carrito
  //if (!req.user.rol == "admin") return res.sendStatus(401);
  //Carrito.delete(id).then()
  res.send("pructo de carrito borrado");
});

router.put("/:id", (req, res) => {
  //const {cantidad} = req.body
  //Carrito.findByPk(id).then( carrito => carrito.update(cantidad))
  res.send("cantidad modificada en carrito");
});

module.exports = router;
