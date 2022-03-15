
const { DataTypes, Model } = require("sequelize");
const db = require("../config/db");

class Reviews extends Model {}

Reviews.init(
    {
      review:{
        type: DataTypes.TEXT,
        allowNull: false,
        },
    },
    {
        sequelize: db, 
        modelName: "reviews",
    }
)


module.exports = Reviews;