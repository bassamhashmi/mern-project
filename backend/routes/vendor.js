const express = require("express");
const VendorController = require("../controllers/vendor");
const { validateAuth } = require("../middlewares/admin");

const router = express.Router();

router.get("/vId=:id", VendorController.getVendor);

router.get("/all", VendorController.allVendors);

router.post("/add", validateAuth, VendorController.addVendor);

router.put("/vId=:id", validateAuth, VendorController.updateVendor);

router.delete("/vId=:id", validateAuth, VendorController.deleteVendor);

module.exports = router;
