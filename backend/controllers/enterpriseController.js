const Enterprise = require("../models/Enterprise");

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
