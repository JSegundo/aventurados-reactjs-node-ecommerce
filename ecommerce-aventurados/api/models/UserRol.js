const { Sequelize, DataTypes, Model} = require('sequelize');
const db = require('../config/db')



class UserRol extends Model {}

UserRol.init(
    {
        rol:{
            type:DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        // Other model options go here
        sequelize: db, // We need to pass the connection instance
       // tableName: 'users', // We need to choose the model name
        modelName: 'user_rol',
    }
);

      
 
module.exports=UserRol;
