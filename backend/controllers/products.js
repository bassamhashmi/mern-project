const ProductsModel = require("../models/product");

/*
    GET | Show All Products
*/
const showAll = async (_, res) => {
  try {
    const products = await ProductsModel.find();

    res.status(200).json(products);
  } catch (error) {
    res.status(404).json(error);
  }
};

/*
    GET | Show one Product
*/
const showOne = async (req, res) => {
  try {
    const product = await ProductsModel.findOne({ _id: req.params.id });

    if (!product) {
      res.status(404).json({ message: "Product not found!" });
      return;
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(400).json(error);
  }
};

/*
    POST | Add Product
*/
const addNew = async (req, res) => {
  try {
    const {
      title,
      description,
      genderSegment,
      variants,
      category,
      vendor,
      status,
    } = req.body;

    const id = req.admin._id;

    const newProduct = new ProductsModel({
      creator: id,
      title,
      description,
      genderSegment,
      featuredImage: req.file.filename,
      variants: JSON.parse(variants),
      category,
      vendor,
      status,
    });

    const product = await newProduct.save();

    res.status(200).json(product);
  } catch (error) {
    res.status(400).json(error);
  }
};

/*
    PUT | Update Product
*/
const update = async (req, res) => {
  const id = req.params.id;

  const data = { ...req.body };

  try {
    const updatedProduct = await ProductsModel.findByIdAndUpdate(id, data, {
      returnDocument: "after",
    });

    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(400).json(error);
  }
};

/*
    DELETE | Delete Product
*/
const remove = async (req, res) => {
  try {
    await req.product.remove();
    res.status(200);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = { showAll, showOne, addNew, update, remove };
