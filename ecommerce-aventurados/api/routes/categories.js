const express = require("express");
const router = express.Router();
const { Categorias } = require("../models");

router.get("/", (req, res) => {
  Categorias.findAll()
    .then((categories) => res.send(categories))
    .catch((err) => console.log(err));
});

module.exports = router;
