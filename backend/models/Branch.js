const { DataTypes } = require("sequelize");
const sequelize = require("../db");
const Establishment = require("./Establishment");

const Branch = sequelize.define("Branch", {
  Id: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  StartDate: DataTypes.DATE
}, { timestamps: false });


Establishment.hasMany(Branch, { foreignKey: "EstablishmentNumber", onDelete: "CASCADE" });
Branch.belongsTo(Establishment, { foreignKey: "EstablishmentNumber" });

module.exports = Branch;
