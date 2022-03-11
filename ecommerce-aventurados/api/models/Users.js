const { Sequelize, DataTypes, Model } = require("sequelize");
const db = require("../config/db");
const bcrypt = require("bcrypt");
const UserRol = require("./UserRol");

class Users extends Model {
  hash(password, salt) {
    return bcrypt.hash(password, salt);
  }
}

Users.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    localId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    admin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },

  {
    // Other model options go here
    sequelize: db, // We need to pass the connection instance
    // tableName: 'users', // We need to choose the model name
    modelName: "users",
  }
);

module.exports = Users;
