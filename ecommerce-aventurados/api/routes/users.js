const express = require("express");
const router = express.Router();
const Users = require("../models/Users");

router.get("/", (req, res) => {
  res.send("hola");
});

router.post("/register", (req, res) => {
  res.status(201).send("se creo");
});

router.put("/", (req, res) => {
  res.send("se modifico");
});

router.post("/login", (req, res) => {
  res.status(202).send("entro");
});

router.post("/logout", (req, res) => {
  res.status(202).send("sali");
});

router.get("/me", (req, res) => {
  res.send("perfil user");
});

router.get("/me/orders", (req, res) => {
  res.send("ordenes");
});

router.delete("/admin/:id", (req, res) => {
  //user.rol == admin?
  res.status(202).send("user borrado");
});

router.put("/admin/:id", (req, res) => {
  //req.user.rol == 'admin' return res.sendStatus(401)
  res.status(202).send("nuevo admin");
});

router.get("/admin/users", (req, res) => {
  //user.rol == admin?
  res.send("all users");
});

// router.get('/admin/orders/:status', (req, res) => {
//     res.send()
// })

module.exports = router;
