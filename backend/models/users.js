const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
    },
    gender: {
      type: String,
    },
    dateOfBirth: {
      type: String,
    },
    contactDetails: [
      {
        mobileNumber: String,
        email: String,
      },
    ],
    shippingAddress: [
      {
        street: String,
        postalCode: String,
        city: String,
        country: String,
      },
    ],
  },
  { timestamps: {} }
);

module.exports = mongoose.model("users", userSchema);
