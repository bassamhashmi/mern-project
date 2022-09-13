const VendorModel = require("../models/vendor");

const allVendors = async (_, res) => {
  try {
    const vendors = await VendorModel.find();

    res.status(200).json(vendors);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getVendor = async (req, res) => {
  const id = req.params.id;
  try {
    const vendor = await VendorModel.findOne({ _id: id });

    res.status(200).json(vendor);
  } catch (error) {
    res.status(400).json(error);
  }
};

const addVendor = async (req, res) => {
  const name = req.body.name;
  const creator = req.admin;

  try {
    const newVendor = await VendorModel.create({
      creator,
      name,
    });

    res.status(201).json(newVendor);
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateVendor = async (req, res) => {
  const { id, creator, name } = req.body;

  const data = {
    creator,
    name,
  };

  try {
    const vendor = await VendorModel.findByIdAndUpdate(id, data, {
      returnDocument: "after",
    });

    res.status(200).json(vendor);
  } catch (error) {
    res.status(400).json(error);
  }
};

const deleteVendor = async (req, res) => {
  const id = req.body.id;

  try {
    const vendor = await VendorModel.findByIdAndDelete(id);

    res.status(200).json(vendor);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  allVendors,
  getVendor,
  addVendor,
  updateVendor,
  deleteVendor,
};
