const express = require("express");
const router = express.Router();
const { Users, Ordenes, Carritos } = require("../models");

router.post("/register", (req, res) => {
  const { name, lastName, email } = req.body.user;
  const { localId } = req.body;
  Users.create({ name, lastName, email, localId })
    .then((user) => res.status(201).send(user))
    .catch((err) => console.log(err));
});

// router.put("/", (req, res) => {
//   res.send("se modifico");
// });

router.get("/me", (req, res) => {
  const { localId } = req.body;
  Users.findOne({ where: { localId } })
    .then((user) => res.send(user))
    .catch((err) => console.log(err));
});

router.get("/me/orders", (req, res) => {
  const { localId } = req.body;
  //Carrito.findAll({where: {}})
  res.send("ordenes");
});

router.delete("/admin/:id", (req, res) => {
  const { id } = req.params;
  const { localId } = req.body;
  Users.findOne({ where: { localId } })
    .then((user) => {
      if (!user.admin) return res.sendStatus(401);
      Users.findOne({ where: { localId: id } }).then((user) => {
        const userDeleted = user;
        user.destroy();
        res.send(userDeleted);
      });
    })
    .catch((err) => console.log(err));
});

router.put("/admin/:id", (req, res) => {
  //req.user.rol == 'admin' return res.sendStatus(401)
  const { id } = req.params;
  const { localId } = req.body;
  Users.findOne({ where: { localId } })
    .then((user) => {
      if (!user.admin) return res.sendStatus(401);
      Users.update({ admin: true }, { where: { localId: id } }).then((user) => {
        console.log(user);
        res.status(202).send(user);
      });
    })
    .catch((err) => console.log(err));
});

router.get("/admin/users", (req, res) => {
  const { localId } = req.body;
  Users.findOne({ where: { localId } })
    .then((user) => {
      if (!user.admin) return res.sendStatus(401);
      Users.findAll().then((user) => res.send(user));
    })
    .catch((err) => console.log(err));
});

module.exports = router;
