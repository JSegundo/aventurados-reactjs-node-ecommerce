const Users = require("./Users");
const UserRol = require("./UserRol");
const Products = require("./Products");
const Orders = require("./Orders");
const States = require("./States");
const Categories = require("./Categories");
const Carts = require("./Carts");
const Favorites = require("./Favorites");

module.exports = {
  UserRol,
  Users,
  Products,
  Orders,
  States,
  Categories,
  Carts,
  Favorites,
};

Favorites.belongsTo(Products);
Favorites.belongsTo(Users);

Products.belongsTo(States);
Products.belongsTo(Categories);

Carts.belongsTo(Users);
Carts.belongsTo(Products);
Carts.belongsTo(States);


