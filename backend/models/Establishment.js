const { DataTypes } = require("sequelize");
const sequelize = require("../db");
const Enterprise = require("./Enterprise");

const Establishment = sequelize.define("Establishment", {
  EstablishmentNumber: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  StartDate: DataTypes.DATE
}, { timestamps: false });


Enterprise.hasMany(Establishment, { foreignKey: "EnterpriseNumber", onDelete: "CASCADE" });
Establishment.belongsTo(Enterprise, { foreignKey: "EnterpriseNumber" });

module.exports = Establishment;
