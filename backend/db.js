const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("kbo_crud", "root", "", {
  host: "localhost",
  dialect: "mysql",
  logging: false
});

module.exports = sequelize;
