const UsersModel = require("../models/users");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

/*
    GET | User Data
*/
const getUserData = async (req, res) => {
  try {
    const userData = await UsersModel.findOne({ email: req.user.email });

    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json(error);
  }
};

/*
    GET | All Users Data
*/
const getAllUsers = async (_, res) => {
  try {
    const usersData = await UsersModel.find();

    res.status(200).json(usersData);
  } catch (error) {
    res.status(404).json(error);
  }
};

/*
    POST | Create New User
*/
const signUp = async (req, res) => {
  try {
    const {
      fullName,
      username,
      email,
      password,
      gender,
      contactDetails,
      shippingAddress,
    } = req.body;

    if (!fullName || !username || !email || !password) {
      res.status(400).json({ message: "Enter details correctly" });
      return;
    }

    const hash = bcrypt.hashSync(password, 10);

    const inputData = {
      fullName,
      username,
      email,
      password: hash,
      gender,
      contactDetails,
      shippingAddress,
    };

    if (req.file) {
      inputData.avatar = req.file.filename;
    }

    const newUser = await UsersModel.create(inputData);

    res.status(200).json(newUser);
  } catch (error) {
    res.status(400).json({ message: "Error signing up!", error });
  }
};

/*
    POST | find user and check email and password
*/
const signIn = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if ((!email && !username) || !password) {
      res.status(400).json({ message: "Enter details correctly" });
      return;
    }

    const user = email
      ? await UsersModel.findOne({
          email,
        })
      : await UsersModel.findOne({
          username,
        });

    if (!user) {
      res.status(404).json({ message: "User does not exist!" });
      return;
    }

    const validate = bcrypt.compareSync(req.body.password, user.password);

    if (!validate) {
      res.status(400).json({ message: "Password is incorrect!" });
      return;
    }

    // Generating JWT ==> auth_token
    const auth_token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: 21600, // 6 hours
    });

    res.status(200).json(auth_token);
  } catch (error) {
    res.status(400).json(error);
  }
};

/*
    PUT | Update User
*/
const update = async (req, res) => {
  const id = req.user._id;

  const data = req.user_data;

  try {
    const updatedUser = await UsersModel.findByIdAndUpdate(id, data, {
      returnDocument: "after",
    });

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = { signIn, signUp, getUserData, getAllUsers, update };
