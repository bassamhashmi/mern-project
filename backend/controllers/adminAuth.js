const AdminsModel = require("../models/admin");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

/*
    GET | Admin Data
*/
const getAdminData = async (req, res) => {
  try {
    const adminData = await AdminsModel.findOne({
      username: req.admin.username,
    });

    res.status(200).json({ authorized: true, adminData });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

/*
    GET | All Admins Data
*/
const getAllAdmins = async (req, res) => {
  try {
    const adminsData = await AdminsModel.find();

    res.status(200).json(adminsData);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

/*
    POST | Create New Admin
*/
const signUp = async (req, res) => {
  try {
    const { fullName, email, username, password, role } = req.body;

    if (!fullName || !email || !username || !password || !role) {
      res.status(400).json({ message: "Enter details correctly" });
      return;
    }

    const hash = bcrypt.hashSync(password, 10);

    const newAdmin = await AdminsModel.create({
      fullName,
      email,
      username,
      password: hash,
      role,
      avatar: req.file.filename,
    });

    res.status(200).json({ success: true, newAdmin });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

/*
    POST | find admin and check email and password
*/
const signIn = async (req, res) => {
  try {
    const { email, username, password } = req.body;

    if ((!email && !username) || !password) {
      res.status(400).json({ message: "Enter details correctly" });
      return;
    }

    const admin = email
      ? await AdminsModel.findOne({
          email,
        })
      : await AdminsModel.findOne({
          username,
        });

    if (!admin) {
      res.status(404).json({ message: "Admin does not exist!" });
      return;
    }

    const validate = bcrypt.compareSync(password, admin.password);

    if (!validate) {
      res
        .status(400)
        .json({ success: false, message: "Password is incorrect!" });
      return;
    }

    // Generating JWT ==> auth_token

    const auth_token = jwt.sign(
      { _id: admin._id },
      process.env.ADMIN_JWT_SECRET,
      {
        expiresIn: 7200, // 120 minutes
      }
    );

    res.status(200).json({ success: true, validate, auth_token, admin });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

/*
    PUT | update admin data
*/
const update = async (req, res) => {
  const id = req.params.id;

  const data = req.admin_data;

  try {
    const updatedAdmin = await AdminsModel.findByIdAndUpdate(id, data, {
      returnDocument: "after",
    });

    res.status(200).json({ success: true, updatedAdmin });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

/*
    DELETE | delete admin
*/
const remove = async (req, res) => {
  const id = req.params.id;

  try {
    await AdminsModel.findByIdAndRemove(id);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

module.exports = { getAdminData, getAllAdmins, signIn, signUp, update, remove };
