const express = require("express");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const AdminsModel = require("../models/admin");

/*
    Super Admin Authorization
*/
const validateSuperAdmin = async (req, res, next) => {
  try {
    const auth_token = req.headers.auth_token;

    const resolve = jwt.verify(auth_token, process.env.ADMIN_JWT_SECRET);

    const admin = await AdminsModel.findOne({ _id: resolve._id });

    if (admin.role === "super_admin") {
      req.admin = admin;

      next();
      return;
    }

    res.status(403).json({
      message: "Authorization Failed!",
    });
  } catch (error) {
    res.status(403).json({
      message: "SuperAdmin Verification Failed!",
      error: error,
    });
  }
};

/*
    Mutual Authorization
*/
const validateAuth = async (req, res, next) => {
  const auth_token = req.headers.auth_token;

  try {
    const resolve = jwt.verify(auth_token, process.env.ADMIN_JWT_SECRET);

    const admin = await AdminsModel.findOne({ _id: resolve._id });

    if (admin.role === "super_admin" || admin.role === "admin") {
      req.admin = admin;

      next();
      return;
    }

    res.status(403).json({
      message: "Admin Authorization Failed!",
    });
  } catch (error) {
    res.status(403).json({
      message: "Admin Authorization Failed!",
      error: error,
    });
  }
};

/*
    Admins Avatar Storage
*/
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/admins/images");
  },

  filename: function (req, file, cb) {
    const uniqueSuffix = Math.round(Math.random() * 1e6);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + "." + file.mimetype.split("/")[1]
    );
  },
});

/*
    Admin Data Input
*/
const adminInput = async (req, res, next) => {
  try {
    if (!req.body.password) {
      const admin = await AdminsModel.findOne({ _id: req.admin._id });

      req.admin_data = {
        fullName: req.body.fullName,
        password: admin.password,
        role: req.body.role,
        avatar: req.file.filename,
      };

      next();
      return;
    }

    const hash = bcrypt.hashSync(req.body.password, 10);

    req.user_data = {
      fullName: req.body.fullName,
      password: hash,
      role: req.body.role,
      avatar: req.file.filename,
    };

    next();
  } catch (error) {
    res.status(400).send(error);
  }
};

var uploadAvatar = multer({ storage: storage });

module.exports = {
  validateSuperAdmin,
  validateAuth,
  uploadAvatar,
  adminInput,
};
