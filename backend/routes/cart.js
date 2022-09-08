const express = require("express");

const { verifyUser } = require("../middlewares/user");

const CartController = require("../controllers/cart");

const router = express.Router();

router.get("/my", verifyUser, CartController.getCart);

router.post("/add", verifyUser, CartController.createCart);

router.delete("/remove", verifyUser, CartController.removeItem);

module.exports = router;
