const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const orderSchema = new mongoose.Schema({
  user: {
    type: ObjectId,
    ref: "users",
    required: true,
  },
  cart: {
    type: ObjectId,
    ref: "carts",
    required: true,
  },
  totalBill: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  comments: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("orders", orderSchema);
