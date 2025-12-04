const { DataTypes } = require("sequelize");
const sequelize = require("../db");
const Enterprise = require("./Enterprise");

const Activity = sequelize.define("Activity", {
  EntityNumber: DataTypes.STRING,
  ActivityGroup: DataTypes.STRING,
  NaceVersion: DataTypes.STRING,
  NaceCode: DataTypes.STRING,
  Classification: DataTypes.STRING
}, { timestamps: false });

Enterprise.hasMany(Activity, { foreignKey: "EntityNumber", sourceKey: "EnterpriseNumber" });
Activity.belongsTo(Enterprise, { foreignKey: "EntityNumber", targetKey: "EnterpriseNumber" });

module.exports = Activity;
