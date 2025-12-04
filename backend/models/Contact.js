const { DataTypes } = require("sequelize");
const sequelize = require("../db");
const Enterprise = require("./Enterprise");

const Contact = sequelize.define("Contact", {
  EntityNumber: DataTypes.STRING,
  EntityContact: DataTypes.STRING,
  ContactType: DataTypes.STRING,
  Value: DataTypes.STRING
}, { timestamps: false });

Enterprise.hasMany(Contact, { foreignKey: "EntityNumber", sourceKey: "EnterpriseNumber" });
Contact.belongsTo(Enterprise, { foreignKey: "EntityNumber", targetKey: "EnterpriseNumber" });

module.exports = Contact;
