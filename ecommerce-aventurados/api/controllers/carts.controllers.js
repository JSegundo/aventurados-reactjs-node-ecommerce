
const { Carts, Products, Users,Categories } = require("../models");
const { Op } = require("sequelize");
const { EditNotificationsTwoTone } = require("@mui/icons-material");


const carts_controllers = {
    

    addProduct: async (req, res, next) => { //probado
        //req.body.stateId = 1; //set default state ('create')
        // const {userId,productId,amount,transaction}= req.body
        console.log(req.body)
        try {  
          const newCart = await Carts.create(req.body);
          return res.status(202).send(newCart);
        } catch (err) {
            next(err);
          }
    },

    deleteProduct: async (req,res,next) =>{ //lo borra, pero larga un error.
        try{
            const [r,delCart] = await Carts.destroy( { 
                where: { id: req.body.id } 
            }
              );
              return res.send(200);
            } catch (err) {
              next(err);
        }
    },

    editCantidad: async (req, res, next) => { //probada knd
        try {
          const [r,editCant] = await Carts.update(req.body, {
            where: { id: req.body.id },
            returning: true,
          });
         // console.log(editCant)
          return res.status(202).send(editCant[0]);
        } catch (err) {
          next(err);
        }
    },
    getAllProducts: async (req,res,next)=>{ //probada knd
        try{
            const userProd = await Carts.findAll({
                include: [{ model: Products }],
                where: {userId: req.body.userId }, 
                //},
              });
              return res.send(userProd);
        } catch (err) {
              next(err);    
        }
    }
}


 
module.exports = carts_controllers;

          
          
          
          
      
    
