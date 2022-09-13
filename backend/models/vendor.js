const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const vendorSchema = new mongoose.Schema(
  {
    creator: {
      type: ObjectId,
      ref: "admins",
    },
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: {} }
);

module.exports = mongoose.model("vendors", vendorSchema);
