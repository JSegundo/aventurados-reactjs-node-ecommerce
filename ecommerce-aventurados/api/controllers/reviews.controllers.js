const { Reviews ,Products, States, Orders } = require("../models");
const { Op } = require("sequelize");



const review_controllers ={
    addReview: async (req,res,next)=>{
        try{
            const newReview = await Reviews.create(req.body,{ include: [{model:Products},{model:Orders}],})
            return res.status(202).send(newReview);
        } catch(err){
            next(err);
        }
    }


/*
    addProduct: async (req, res, next) => {
        req.body.stateId = 1; //set default state ('create')
        try {
          const newProduct = await Products.create(req.body);
          return res.status(202).send(newProduct);
        } catch (err) {
          next(err);
        }
      },

     try {  
          const newCart = await Carts.create(req.body,{ include: [{ model: Products},{model: Users }],});
          return res.status(202).send(newCart);
        } catch (err) {
            next(err);
          }


*/
}


module.exports = review_controllers;