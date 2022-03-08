const { Sequelize, DataTypes, Model} = require('sequelize');
const db = require('../config/db')


class Ordenes extends Model {}

Ordenes.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
        carritoId:{
        type:  DataTypes.INTEGER,
        references: {
            model: 'Carritos',
            key:'id',
            }
        },
        boucher:{
            type:  DataTypes.INTEGER,
            allowNull:false,

        },
        cantidad:{
            type:  DataTypes.INTEGER,
        },
        estado:{
            type:  DataTypes.INTEGER,
            type:  DataTypes.INTEGER,
            references: {
                model: 'Estado',
                key:'id',
            } 
        },
        transaccion:{
            type:  DataTypes.INTEGER,
            allowNull:false,
        }
    },
    {
        // Other model options go here
        sequelize: db, // We need to pass the connection instance
       // tableName: 'users', // We need to choose the model name
        modelName: 'Ordenes',
    }
        
)

module.exports=Ordenes;

