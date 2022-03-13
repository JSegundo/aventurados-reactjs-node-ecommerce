const { Sequelize, DataTypes, Model } = require("sequelize");
const db = require("../config/db");
const Categorias = require("./Categorias");
const Estados = require("./Estados");

class Products extends Model {}

Products.init(
  {
    categoria_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Categorias,
        key: "id",
      },
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    imagen: {
      type: DataTypes.STRING,
    },
    precio: {
      type: DataTypes.INTEGER,
    },
    estado_id: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      references: {
        model: Estados,
        key: "id",
      },
    },
  },
  {
    sequelize: db, // We need to pass the connection instance
    // tableName: 'users', // We need to choose the model name
    modelName: "products",
  }
);

module.exports = Products;
