const { Sequelize, DataTypes, Model} = require('sequelize');
const db = require('../config/db')


class Products extends Model {}  
  
  Products.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
        categoria_id:{
            type: DataTypes.INTEGER,
            references: {
                model: 'Categorias',
                key:'id',
            }

        },
        descripcion:{
            type:DataTypes.TEXT,
            allowNull: false
        },
        imagen:{
            type: DataTypes.STRING,
        },
        precio:{
            type:DataTypes.INTEGER
        }
    },
        {
            sequelize: db, // We need to pass the connection instance
            // tableName: 'users', // We need to choose the model name
             modelName: 'Products', 
        }
    
    );



    module.exports=Products;

