const Sequelize = require('sequelize');

const db = new Sequelize('dbaventura', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres',
  //logging: true,
});

module.exports=db;
