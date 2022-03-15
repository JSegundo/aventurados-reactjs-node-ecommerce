
const { Carts, Products, Users,Categories } = require("../models");
const { Op } = require("sequelize");


const carts_controllers = {
    //para mostarr el carrito del usuario.
    //findone localid === localid


    addProduct: async (req, res, next) => {
        //req.body.stateId = 1; //set default state ('create')

        try {  
          const newCart = await Carts.create({userId: req.user.id, productId, cantidad});
          return res.status(202).send(newCart);
        } catch (err) {
            next(err);
          }
    },

    deleteProduct: async (req,res,next) =>{ //borra un producto del carrito.
        try{
            const delCart = await Carts.destroy( { 
                where: { id: req.body.id } 
            }
              );
              return res.send(200);
            } catch (err) {
              next(err);
        }
    },

    editCantidad: async (req, res, next) => {
        try {

          const editCant = await Carts.update(req.body.cantidad, {
            where: { id: req.body.id },
            returning: true,
          });
          return res.status(202).send(editCant);
        } catch (err) {
          next(err);
        }
    },
    getAllProducts: async (req,res,next)=>{
        try{
            const userProd = await Carts.findAll({
                include: [{ model: Products }, { model: Categories }],
                where: {
                    userId: { [Op.eq]: req.body.userId }, 
                },
              });
              return res.send(userProd);
        } catch (err) {
              next(err);    
        }
    }
}


 
module.exports = carts_controllers;

          
          
          
          
      
    
