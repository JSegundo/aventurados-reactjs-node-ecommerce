const Users = require("./Users");
const UserRol = require("./UserRol");
const Products = require("./Products");
const Orders = require("./Orders");
const States = require("./States");
const Categories = require("./Categories");
const Carts = require("./Carts");
const Favorites = require("./Favorites");
const Reviews = require("./Reviews");

module.exports = {
  UserRol,
  Users,
  Products,
  Orders,
  States,
  Categories,
  Carts,
  Favorites,
  Reviews,
};

//CATEGORIES
Categories.belongsTo(States)

// ORDERS
Orders.belongsTo(Carts);

// FAVORITOS
Favorites.belongsTo(Products);
Favorites.belongsTo(Users);
// PRODUCTOS
Products.belongsTo(States);
Products.belongsTo(Categories);


Carts.belongsTo(Users);
Carts.belongsTo(Products);
Carts.belongsTo(States);

Reviews.belongsTo(Products);
Reviews.belongsTo(Orders);

//Orders.belongsTo(Carts);







