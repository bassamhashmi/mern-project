const multer = require("multer");

const ProductsModel = require("../models/product");

/*
    Products Image Storage
*/
var storage = multer.diskStorage({
  destination: function (_, _, cb) {
    cb(null, "uploads/products/images");
  },

  filename: function (_, file, cb) {
    const uniqueSuffix = Math.round(Math.random() * 1e4);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + "." + file.mimetype.split("/")[1]
    );
  },
});

const uploadProductImage = multer({ storage: storage });

/*
    Validate Product
*/
const findProduct = async (req, res, next) => {
  try {
    const id = req.params.id;

    const product = await ProductsModel.findById(id);

    if (!product) {
      res.status(404).json({ message: "Product not found!" });
      return;
    }

    req.product = product;
    next();
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = { findProduct, uploadProductImage };
