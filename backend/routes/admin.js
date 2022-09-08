const express = require("express");

const {
  validateSuperAdmin,
  validateAuth,
  uploadAvatar,
} = require("../middlewares/admin");

const AuthenticationController = require("../controllers/admin");

const router = express.Router();

router.get("/me", validateAuth, AuthenticationController.getAdminData);

router.get("/all", validateSuperAdmin, AuthenticationController.getAllAdmins);

router.post(
  "/signup",
  validateSuperAdmin,
  uploadAvatar.single("avatar"),
  AuthenticationController.signUp
);
router.post("/signin", AuthenticationController.signIn);

router.put("id=:id", validateSuperAdmin, AuthenticationController.update);

router.delete("id=:id", validateSuperAdmin, AuthenticationController.remove);

module.exports = router;
