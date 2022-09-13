const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const productSchema = new mongoose.Schema(
  {
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
      required: true,
    },
    genderSegment: {
      type: String,
      required: true,
    },
    variants: [
      {
        id: String,
        size: String,
        color: String,
        price: String,
        inventory: String,
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
  },
  { timestamps: {} }
);

module.exports = mongoose.model("products", productSchema);
