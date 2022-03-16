const express = require("express");
const router = express.Router();

const users_controllers = require("../controllers/users.controllers");
const {
  register,
  getUser,
  getOrders,
  deleteUser,
  addNewAdmin,
  getAllUsers,
  removeAdmin,
  findUserOrCreate,
} = users_controllers;

router.post("/register", register); //con problemas del lado del front

router.get("/me/:localId", getUser);

router.get("/me/orders", getOrders);

router.delete("/admin/:id", deleteUser);

router.put("/admin/:id", addNewAdmin);

router.put("/adminDelete/:id", removeAdmin);

router.get("/admin/users/:localId", getAllUsers);

router.post("/login", findUserOrCreate);

module.exports = router;
