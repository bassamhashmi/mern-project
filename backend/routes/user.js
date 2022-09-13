const express = require("express");
const AuthenticationController = require("../controllers/user");
const { verifyUser, uploadAvatar, userInput } = require("../middlewares/user");
const { validateSuperAdmin } = require("../middlewares/admin");

const router = express.Router();

router.get("/me", verifyUser, AuthenticationController.getUserData);

router.get("/all", validateSuperAdmin, AuthenticationController.getAllUsers);

router.post(
  "/signup",
  uploadAvatar.single("avatar"),
  AuthenticationController.signUp
);

router.post("/signin", AuthenticationController.signIn);

router.put(
  "/update",
  verifyUser,
  uploadAvatar.single("avatar"),
  userInput,
  AuthenticationController.update
);

module.exports = router;
