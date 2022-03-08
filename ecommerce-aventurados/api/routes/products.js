const express = require("express");
const router = express.Router();
const Products = require("../models/Products");

router.post("/", (req, res) => {
  // if (!req.user.rol == "admin") return res.sendStatus(401);
  Products.create(req.body).then((product) => res.status(201).send(product));
});

router.put("/:id", (req, res) => {
  if (!req.user.rol == "admin") return res.sendStatus(401);
  //Product.update(req.body)
  res.send("se modifico un producto");
});

router.delete("/:id", (req, res) => {
  if (!req.user.rol == "admin") return res.sendStatus(401);
  //Product.create(req.body)
  res.send("se elimino un producto");
});

router.get("/", (req, res) => {
  Products.findAll().then((products) => res.send(products));
});

router.get("/:id", (req, res) => {
  Products.findOne(req.params.id).then((product) => res.send(product));
});

router.get("/:categoria_id", (req, res) => {
  const { categoria_id } = req.params;
  Products.findAll({ where: { categoria_id } });
  res.send("por categorias");
});

router.get("/search", (req, res) => {
  //const {query} = req.query
  res.send("producto encontrado");
});

module.exports = router;
