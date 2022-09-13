const CategoryModel = require("../models/category");

const allCategories = async (_, res) => {
  try {
    const categories = await CategoryModel.find();

    res.status(200).json(categories);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getCategory = async (req, res) => {
  const id = req.params.id;
  try {
    const categories = await CategoryModel.findOne({ _id: id });

    res.status(200).json(categories);
  } catch (error) {
    res.status(400).json(error);
  }
};

const addCategory = async (req, res) => {
  const name = req.body.name;
  const creator = req.admin._id;

  console.log("name > ", req.body);
  console.log("creator > ", creator);

  try {
    const newCategory = await CategoryModel.create({
      creator,
      name,
    });

    res.status(201).json(newCategory);
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateCategory = async (req, res) => {
  const { id, creator, name } = req.body;

  const data = {
    creator,
    name,
  };

  try {
    const category = await CategoryModel.findByIdAndUpdate(id, data, {
      returnDocument: "after",
    });

    res.status(200).json(category);
  } catch (error) {
    res.status(400).json(error);
  }
};

const deleteCategory = async (req, res) => {
  const id = req.body.id;

  try {
    const category = await CategoryModel.findByIdAndDelete(id);

    res.status(200).json(category);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  allCategories,
  getCategory,
  addCategory,
  updateCategory,
  deleteCategory,
};
