const express = require("express");

const { verifyUser } = require("../middlewares/user");

const FavouritesController = require("../controllers/favourites");

const router = express.Router();

router.get("/my", verifyUser, FavouritesController.getFavourites);

router.post("/mark", verifyUser, FavouritesController.markFavourites);

router.delete("/remove", verifyUser, FavouritesController.removeFavourites);

module.exports = router;
