const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const favouritesSchema = new mongoose.Schema({
  user: {
    type: ObjectId,
    ref: "users",
    required: true,
  },
  items: [
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
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("favourites", favouritesSchema);
