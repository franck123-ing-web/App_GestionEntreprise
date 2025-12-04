const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Meta = sequelize.define("Meta", {
  Variable: DataTypes.STRING,
  Value: DataTypes.STRING
}, { timestamps: false });

module.exports = Meta;
