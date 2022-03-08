const { Sequelize, DataTypes, Model} = require('sequelize');
const db = require('../config/db')


class Carritos extends Model {}

Carritos.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
        userId:{
        type:  DataTypes.INTEGER,
        references: {
            model: 'Users',
            key:'id',
            }
        },
        productId:{
            type:  DataTypes.INTEGER,
            references: {
                model: 'Products',
                key:'id',
            } 
        },
        cantidad:{
            type:  DataTypes.INTEGER,
        },
        estado:{
            type:  DataTypes.INTEGER,
            references: {
                model: 'Estado',
                key:'id',
            } 
        },
        transaccion:{
            type:  DataTypes.INTEGER,
            allowNull:false
        },
    },
    {
        // Other model options go here
        sequelize: db, // We need to pass the connection instance
       // tableName: 'users', // We need to choose the model name
        modelName: 'Carritos',
    }
        
)

module.exports=Carritos;




