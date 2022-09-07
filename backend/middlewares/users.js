const multer = require("multer");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const UsersModel = require("../models/users");

/*
    Users Avatar Storage
*/
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/users/images");
  },

  filename: function (req, file, cb) {
    const uniqueSuffix = Math.round(Math.random() * 1e6);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + "." + file.mimetype.split("/")[1]
    );
  },
});
const uploadAvatar = multer({ storage: storage });

/*
    Verify User
*/
const verifyUser = (req, res, next) => {
  try {
    const auth_token = req.headers.auth_token;

    const user = jwt.verify(auth_token, process.env.JWT_SECRET);

    req.user = user;

    next();
  } catch (error) {
    res.status(403).json({
      message: "auth_token ==> Verification Failed!",
      error: error,
    });
  }
};

/*
    User Data Input
*/
const userInput = async (req, res, next) => {
  try {
    if (!req.body.password) {
      const user = await UsersModel.findOne({ _id: req.user._id });

      req.user_data = {
        fullName: req.body.fullName,
        password: user.password,
        cantactDetails: req.body.contactDetails,
        shippingAddress: req.body.shippingAddress,
        avatar: req.file.filename,
      };

      next();
      return;
    }

    const hash = bcrypt.hashSync(req.body.password, 10);

    req.user_data = {
      fullName: req.body.fullName,
      password: hash,
      cantactDetails: req.body.contactDetails,
      shippingAddress: req.body.shippingAddress,
      avatar: req.file.filename,
    };

    next();
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = { uploadAvatar, verifyUser, userInput };
