const { DataTypes } = require("sequelize");
const sequelize = require("../db");
const Enterprise = require("./Enterprise");

const Address = sequelize.define("Address", {
  EntityNumber: DataTypes.STRING,
  TypeOfAddress: DataTypes.STRING,
  CountryNL: DataTypes.STRING,
  CountryFR: DataTypes.STRING,
  Zipecode: DataTypes.STRING,
  MunicipalityNL: DataTypes.STRING,
  MunicipalityFR: DataTypes.STRING,
  StreetNL: DataTypes.STRING,
  StreetFR: DataTypes.STRING,
  HouseNumber: DataTypes.STRING,
  Box: DataTypes.STRING,
  ExtraAddressInfo: DataTypes.STRING,
  DateStrikingOff: DataTypes.DATE
}, { timestamps: false });

Enterprise.hasMany(Address, { foreignKey: "EntityNumber", sourceKey: "EnterpriseNumber" });
Address.belongsTo(Enterprise, { foreignKey: "EntityNumber", targetKey: "EnterpriseNumber" });

module.exports = Address;
