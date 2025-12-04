const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Enterprise = sequelize.define("Enterprise", {
  EnterpriseNumber: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  Status: DataTypes.STRING,
  JuridicalSituation: DataTypes.STRING,
  TypeOfEnterprise: DataTypes.STRING,
  JuridicalForm: DataTypes.STRING,
  JuridicalFormCAC: DataTypes.STRING,
  StartDate: DataTypes.DATE
}, { timestamps: false });

module.exports = Enterprise;
