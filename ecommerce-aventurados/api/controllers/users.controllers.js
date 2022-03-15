const { Users, Carts } = require("../models");
const { Op } = require("sequelize");

const users_controllers = {
  register: async (req, res, next) => {
    const { name, lastName, email } = req.body.user;
    const { localId } = req.body;
    try {
      const user = await Users.create({ name, lastName, email, localId });
      return res.status(201).send(user);
    } catch (err) {
      next(err);
    }
  },
  getUser: async (req, res, next) => {
    const { localId } = req.params;
    // console.log("localId: ", localId);
    try {
      const user = await Users.findOne({ where: { localId } });
      return res.send(user);
    } catch (err) {
      next(err);
    }
  },
  getOrders: async (req, res, next) => {
    const { localId } = req.body;
    try {
      const user = await Users.findOne({ where: { localId } });
      const orders = Carts.findAll({ where: { userId: user.id, stateId: 2 } }); // falta terminar por relacion de tablas
    } catch (err) {
      next(err);
    }
  },
  deleteUser: async (req, res, next) => {
    const { id } = req.params; //Usuario a borrar
    const { localId } = req.body; //id del admin
    try {
      const user = await Users.findOne({ where: { localId: id } });
      const userDeleted = user;
      await user.destroy();
      return res.send(userDeleted);
    } catch (err) {
      next(err);
    }
  },
  addNewAdmin: async (req, res, next) => {
    const { id } = req.params; //Usuario new admin
    const { localId } = req.body; //id del admin
    try {
      const [r, user] = await Users.update(
        { admin: true },
        { where: { localId: id }, returning: true }
      );
      return res.status(202).send(user[0]);
    } catch (err) {
      next(err);
    }
  },
  removeAdmin: async (req, res, next) => {
    const { id } = req.params; //Usuario new admin
    const { localId } = req.body; //id del admin
    try {
      const [r, user] = await Users.update(
        { admin: false },
        { where: { localId: id }, returning: true }
      );
      return res.status(202).send(user[0]);
    } catch (err) {
      next(err);
    }
  },

  getAllUsers: async (req, res, next) => {
    const { localId } = req.params;
    // console.log("localId", localId);
    try {
      const users = await Users.findAll({
        where: { localId: { [Op.ne]: localId } },
      });
      return res.send(users);
    } catch (err) {
      next(err);
    }
  },
  //   getUserLogin: async (req, res ,next) => {
  //       const { name, lastName, email} = req.body.user
  //       const { localId } = req.body
  //       try{
  //           const [users] = await Users.findOrCreate({where: {localId}})
  //       }
  //   }
};

module.exports = users_controllers;
