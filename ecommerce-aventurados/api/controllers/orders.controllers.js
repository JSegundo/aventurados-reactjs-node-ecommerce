const { Orders, Carts, Users } = require("../models");

const orders_controllers = {
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
       });
      return res.send(orders);
    } catch (err) {
      next(err);
    }
  },
  addOrder: async (req, res, next) => {
   // req.body.stateId = 1; //set default state ('create')
   //console.log(req.body); 
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



/* 
  User.bulkCreate([
    { firstName: "Nathan", lastName: "Sebhastian" },
    { firstName: "Jack", lastName: "Stark" },
    { firstName: "John", lastName: "Snow" },
  ]).then(() => console.log("Users data have been saved")); */


module.exports = orders_controllers;
