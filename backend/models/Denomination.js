const { DataTypes } = require("sequelize");
const sequelize = require("../db");
const Enterprise = require("./Enterprise");

const Denomination = sequelize.define("Denomination", {
  EntityNumber: DataTypes.STRING,
  Language: DataTypes.STRING,
  TypeOfDenomination: DataTypes.STRING,
  Denomination: DataTypes.STRING
}, { timestamps: false });

Enterprise.hasMany(Denomination, { foreignKey: "EntityNumber", sourceKey: "EnterpriseNumber" });
Denomination.belongsTo(Enterprise, { foreignKey: "EntityNumber", targetKey: "EnterpriseNumber" });

module.exports = Denomination;
