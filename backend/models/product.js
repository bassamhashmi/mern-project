const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const productSchema = new mongoose.Schema({
  creator: {
    type: ObjectId,
    ref: "admins",
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  featuredImage: {
    type: String,
    // required: true,
  },
  targetGender: {
    type: String,
    required: true,
  },
  variants: [
    {
      size: String,
      color: String,
      price: Number,
      inventory: Number,
      image: String,
    },
  ],
  category: {
    type: String,
    default: "uncategorized",
  },
  vendor: {
    type: String,
    default: "unknown",
  },
  status: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("products", productSchema);
