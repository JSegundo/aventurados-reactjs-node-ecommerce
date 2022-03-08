const { Sequelize, DataTypes, Model} = require('sequelize');
const db = require('../config/db')



class UserRol extends Model {}

UserRol.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
        rol:{
            type:DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        // Other model options go here
        sequelize: db, // We need to pass the connection instance
       // tableName: 'users', // We need to choose the model name
        modelName: 'userrol',
    }
);

      
 
module.exports=UserRol;
