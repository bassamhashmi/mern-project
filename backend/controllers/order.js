const OrdersModel = require("../models/order");
const UsersModel = require("../models/users");
const CartsModel = require("../models/cart");
const ProductsModel = require("../models/product");

const createOrder = async (req, res) => {
  const { userId, status, comments } = req.body;

  const cart = await CartsModel.findOne({ user: userId });

  const productId = cart.items.productId;

  const totalBill = cart.items.reduce((acc, item) => {
    acc += item.variant.price * item.quantity;

    return acc;
  }, 0);

  const product = await product.findOne({ _id: productId });

  const newOrder = await OrdersModel.create({
    user,
    totalBill,
    status,
    comments,
  });

  res.status(200).json({ success: true, newOrder });
};

module.exports = { createOrder };
