const { Orders, Carts, Users, Products } = require("../models");

const orders_controllers = {
  getAll: async (req, res, next) => {
    const { id } = req.params;
    try {
      const orders = await Orders.findAll({
         include: [{
            model: Carts, 
             include: {
              model:Users,
              model: Products,
              where: { id: id }
            },
              where:{userId:id}
            }
        ],
       });
      return res.send(orders);
    } catch (err) {
      next(err);
    }
  },
  addOrder: async (req, res, next) => {
   try {
      const newOrder = await Orders.bulkCreate(req.body);
      return res.status(202).send(newOrder);
    } catch (err) {
      next(err);
    }
  },
  getAdminAll:async (req, res, next) => {
   // const { id } = req.params;
    try {
      const orders = await Orders.findAll({
         include: [{
            model: Carts, 
             include: {
              model:Users,
     //         where: { id: id }
            },
     //         where:{userId:id}
            }
        ],
       });
      return res.send(orders);
    } catch (err) {
      next(err);
    }
  },

};

module.exports = orders_controllers;
