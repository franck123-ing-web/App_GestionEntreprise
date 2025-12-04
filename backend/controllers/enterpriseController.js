const { Op } = require("sequelize");
const Enterprise = require("../models/Enterprise");
const Denomination = require("../models/Denomination");
exports.getAll = async (req, res) => {
  const enterprises = await Enterprise.findAll();
  res.json(enterprises);
};

exports.getOne = async (req, res) => {
  const enterprise = await Enterprise.findByPk(req.params.id);
  res.json(enterprise);
};

exports.create = async (req, res) => {
  const enterprise = await Enterprise.create(req.body);
  res.json(enterprise);
};

exports.update = async (req, res) => {
  const enterprise = await Enterprise.findByPk(req.params.id);
  await enterprise.update(req.body);
  res.json(enterprise);
};

exports.deleteOne = async (req, res) => {
  const enterprise = await Enterprise.findByPk(req.params.id);
  await enterprise.destroy();
  res.json({ message: "Enterprise deleted" });
};
exports.searchByName = async (req, res) => {
  const name = req.params.name;

  const enterprises = await Enterprise.findAll({
    include: [{
      model: Denomination,
      where: {
        Denomination: { [Op.like]: `%${name}%` }
      }
    }]
  });

  res.json(enterprises);
};
