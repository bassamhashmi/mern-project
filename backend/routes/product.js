const express = require("express");
const ProductsController = require("../controllers/products");
const { uploadProductImage, findProduct } = require("../middlewares/products");
const { validateAuth } = require("../middlewares/admin");

const router = express.Router();

router.get("/pId=:id", ProductsController.showOne);

router.get("/all", ProductsController.showAll);

router.post(
  "/add",
  validateAuth,
  uploadProductImage.single("product-featured-image"),
  ProductsController.addNew
);

router.put("/pId=:id", validateAuth, ProductsController.update);

router.delete("/pId=:id", validateAuth, findProduct, ProductsController.remove);

module.exports = router;
