const OrdersModel = require("../models/order");
const CartsModel = require("../models/cart");

/*
    GET | get all orders details
*/
const allOrders = async (_, res) => {
  try {
    const orders = await OrdersModel.find();

    res.status(200).json(orders);
  } catch (error) {
    res.status(400).json(error);
  }
};

/*
    GET | get orders details of specific user
*/
const userOrders = async (req, res) => {
  try {
    const user = req.query.userId;

    const details = await OrdersModel.find({ user }).sort({ createdAt: -1 });

    res.status(200).json(details);
  } catch (error) {
    res.status(400).json(error);
  }
};

/*
    GET | get my orders (for a user)
*/
const myOrders = async (req, res) => {
  try {
    const user = req.user._id;

    const details = await OrdersModel.find({ user }).sort({ createdAt: -1 });

    res.status(200).json({ details });
  } catch (error) {
    res.status(400).json(error);
  }
};

/*
    POST | place a new order upon checkout
*/
const createOrder = async (req, res) => {
  const user = req.user._id;
  const { comments } = req.body;

  const cart = await CartsModel.findOne({ user });

  const orderDetails = [];

  const totalBill = cart.items.reduce((acc, item) => {
    acc += item.variant.price * item.quantity;

    orderDetails.push({
      productId: item.productId,
      variant: item.variant,
      quantity: item.quantity,
    });

    return acc;
  }, 0);

  const newOrder = await OrdersModel.create({
    user,
    details: orderDetails,
    totalBill,
    status: "Placed",
    comments,
  });

  //empty cart after order is placed
  await CartsModel.findByIdAndDelete({ _id: cart._id });

  res.status(200).json({ message: "New Order placed!", newOrder });
};

module.exports = { allOrders, userOrders, myOrders, createOrder };
