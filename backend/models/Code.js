const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Code = sequelize.define("Code", {
  Category: DataTypes.STRING,
  Code: DataTypes.STRING,
  Language: DataTypes.STRING,
  Description: DataTypes.STRING
}, { timestamps: false });

module.exports = Code;
