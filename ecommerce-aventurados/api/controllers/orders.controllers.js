const { Orders, Carts, Users } = require("../models");

const users_controllers = {
  getAll: async (req, res, next) => {
    const { id } = req.params;
    try {
      const orders = await Orders.findAll({
         include: [{
            model: Carts, 
             include: {
              model:Users,
              where: { id: id }
            },
              where:{userId:id}
            }
        ],
        //where: { userId: id }
        //include: [ { model: Carts }],
 //       where: { userId: id },
 //       order: [["userId", "DESC"]],
       });
      return res.send(orders);
    } catch (err) {
      next(err);
    }
  },
};

module.exports = users_controllers;
