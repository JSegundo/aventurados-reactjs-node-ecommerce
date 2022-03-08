const { Sequelize, DataTypes, Model} = require('sequelize');
const db = require('../config/db')
const bcrypt = require('bcrypt')


class Users extends Model {
    hash(password,salt){
      return bcrypt.hash(password,salt)
    }
  }  
  
  Users.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true,
        validate: {
          isEmail: true
        }},
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      salt:{
        type:DataTypes.STRING,
      },
   /*    adress:{
          type:  DataTypes.INTEGER,
          references: {
            model: 'adress',
            key: 'id',
          }
      },
    */   tipoUsuario:{
        type:  DataTypes.INTEGER,
        references: {
            model: 'UserRol',
            key:'id',
        }
    }

    },
    {
      // Other model options go here
      sequelize: db, // We need to pass the connection instance
     // tableName: 'users', // We need to choose the model name
      modelName: 'users',
    }
    
);

  
module.exports=Users;
