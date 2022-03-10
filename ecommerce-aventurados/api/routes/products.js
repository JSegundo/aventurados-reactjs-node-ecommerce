const express = require("express");
const router = express.Router();
const Products = require("../models/Products");

router.post("/", (req, res) => {
  // if (!req.user.rol == "admin") return res.sendStatus(401);
  Products.create(req.body)
    .then((product) => {
      res.status(201).send("product");
    })
    .catch((err) => console.error(err));
});

router.put("/:id", (req, res) => {
  // if (!req.user.rol == "admin") return res.sendStatus(401);
  Products.findByPk(req.params.id).then((product) => {
    product
      .update(req.body)
      .then((updated) => {
        // console.log(updated.dataValues);
        res.status(202).send(updated.dataValues);
      })
      .catch((err) => console.error(err));
  });
});

// router.delete("/:id", (req, res) => {
//   // if (!req.user.rol == "admin") return res.sendStatus(401);
// Products.findByPk(req.params.id).then((product) => {
//   product
//     .update(req.body)
//     .then((updated) => {
//       // console.log(updated.dataValues);
//       res.status(202).send(updated.dataValues);
//     })
//     .catch((err) => console.error(err));
// });
// });
//no elimina, cambia un estado. Se modifica cuando este modificado el MODEL

router.get("/", (req, res) => {
  Products.findAll().then((products) => res.send(products));
});

router.get("/:id", (req, res) => {
  Products.findByPk(req.params.id).then((product) => res.send(product));
});

router.get("/:categoria_id", (req, res) => {
  const { categoria_id } = req.params;
  Products.findAll({ where: { categoria_id } });
  res.send("por categorias");
});

// Todavia NO funciona.
router.get("/search", (req, res) => {
  const { query } = req.query;
  console.log("queryyyyyyyyyyyyy", query);
  Products.findAll({
    where: { description: { [Op.startsWith]: `${query}` } },
  }).then((products) => {
    console.log(products);
    res.send(products);
  });
});

module.exports = router;
