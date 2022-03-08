const { Sequelize, DataTypes, Model} = require('sequelize');
const db = require('../config/db')


class Estados extends Model {}  
  
Estados.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
        Descripcion:{
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize:db,
        modelName:'estados',
    }
);

