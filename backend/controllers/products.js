const ProductsModel = require("../models/product");

/*
    GET | Show All Products
*/
const showAll = async (req, res) => {
  try {
    const products = await ProductsModel.find();

    res.status(200).json({ success: true, products });
  } catch (error) {
    res.status(404).json({ success: false, error });
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

    res.status(200).json({ success: true, product });
  } catch (error) {
    res.status(400).json({ success: false, error });
  }
};

/*
    POST | Add Product
*/
const addNew = async (req, res) => {
  try {
    const {
      creator,
      title,
      description,
      targetGender,
      variants,
      category,
      vendor,
      status,
    } = req.body;

    const newProduct = new ProductsModel({
      creator,
      title,
      description,
      targetGender,
      // featuredImage: req.file.filename,
      variants,
      category,
      vendor,
      status,
    });

    const product = await newProduct.save();

    res.status(200).json({ success: true, product });
  } catch (error) {
    res.status(400).json({ error: error });
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

    res.status(200).json({ success: true, updatedProduct });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

/*
    DELETE | Delete Product
*/
const remove = async (req, res) => {
  try {
    await req.product.remove();
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

module.exports = { showAll, showOne, addNew, update, remove };
