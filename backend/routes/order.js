const express = require("express");

const { validateAuth } = require("../middlewares/admin");
const { verifyUser } = require("../middlewares/user");

const OrderController = require("../controllers/order");

const router = express.Router();

router.get("/all", validateAuth, OrderController.allOrders);

router.get("/user", validateAuth, OrderController.userOrders);

router.get("/me", verifyUser, OrderController.myOrders);

router.post("/new", verifyUser, OrderController.createOrder);

module.exports = router;
