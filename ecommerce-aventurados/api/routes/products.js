const express = require("express");
const router = express.Router();
const { Products } = require("../models");
const { Op } = require("sequelize");

router.post("/", (req, res) => {
  // if (!req.user.admin == true) return res.sendStatus(401);
  Products.create(req.body)
    .then((product) => res.status(201).send(product))
    .catch((err) => console.log(err));
});

router.put("/:id", (req, res) => {
  //  if (!req.user.admin == true) return res.sendStatus(401);
  Products.findByPk(req.params.id)
    .then((product) => {
      product.update(req.body).then(({ dataValues }) => {
        //  console.log(product)
        res.status(202).send(dataValues);
      });
    })
    .catch((err) => console.log(err));
});

router.delete("/:id", (req, res) => {
  //if (!req.user.admin == true) return res.sendStatus(401);
  Products.update(
    {
      estado_id: 4, //el 4 es estado borrado
    },
    {
      where: { id: req.params.id },
    }
  );
  res.send("se elimino un producto");
});

router.get("/", (req, res) => {
  Products.findAll({
    where: {
      estado_id: { [Op.ne]: 4 }, //el valor 4 es borrado. usamos estados para no borrar y perder las referencias.
    },
  })
    .then((products) => res.send(products))
    .catch((err) => console.log(err));
});

router.get("/:id", (req, res) => {
  Products.findByPk(req.params.id).then((product) => res.send(product));
});

router.get("/category/:categoria_id", (req, res) => {
  const { categoria_id } = req.params;
  Products.findAll({ where: { categoria_id: categoria_id } })
    .then((productos) => {
      res.send(productos);
    })
    .catch((err) => console.log(err));
});

// Todavia NO funciona.
router.get("/search", (req, res) => {
  const { query } = req.query;
  Products.findAll({
    where: {
      nombre: { [Op.startsWith]: query },
    },
  })
    .then((productos) => {
      res.send(productos);
    })
    .catch((err) => {
      console.log("error");
    });
});

module.exports = router;
