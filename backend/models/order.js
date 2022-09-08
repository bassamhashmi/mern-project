const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: ObjectId,
      ref: "users",
      required: true,
    },
    details: [
      {
        productId: {
          type: ObjectId,
          ref: "products",
          required: true,
        },
        variant: {
          type: Object,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: 1,
          default: 1,
        },
      },
    ],
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
  },
  { timestamps: {} }
);

module.exports = mongoose.model("orders", orderSchema);
