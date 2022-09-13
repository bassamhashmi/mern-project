const express = require("express");
const CategoryController = require("../controllers/category");
const { validateAuth } = require("../middlewares/admin");

const router = express.Router();

router.get("/cId=:id", CategoryController.getCategory);

router.get("/all", CategoryController.allCategories);

router.post("/add", validateAuth, CategoryController.addCategory);

router.put("/cId=:id", validateAuth, CategoryController.updateCategory);

router.delete("/cId=:id", validateAuth, CategoryController.deleteCategory);

module.exports = router;
