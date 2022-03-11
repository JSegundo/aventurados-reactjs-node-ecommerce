const { Sequelize, DataTypes, Model} = require('sequelize');
const db = require('../config/db')


class Categorias extends Model {}  
  
Categorias.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          }, 
        Descripcion:{
            type: DataTypes.STRING,
            allowNull: false,
        },
       Imagen:{
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize:db,
        modelName:'categorias',
    }
);

module.exports=Categorias;

