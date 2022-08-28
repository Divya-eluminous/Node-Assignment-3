const Sequelize = require('sequelize');
const dbConfig = require('../config/dbConfig.js');

const db={};
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    dialect: dbConfig.dialect,
    host: dbConfig.HOST,
   // logging:true
});

sequelize.authenticate()
.then(()=>{
    console.log('connected....');
})
.catch(err=>{
  console.log('ereor'+err);
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
//db.customer = require('./customer.model');

module.exports = db;