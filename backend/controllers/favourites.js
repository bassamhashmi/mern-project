const FavouritesModel = require("../models/favourites");

/*
    GET | Get favourite items
*/
const getFavourites = async (req, res) => {
  const user = req.user._id;

  try {
    const favourites = await FavouritesModel.findOne({ user });

    if (favourites && favourites.items.length > 0) {
      res.status(200).json(favourites);
      return;
    }

    res.status(200).json({ message: "No favourites added" });
  } catch (error) {
    res.status(400).json(error);
  }
};

/*
    POST | Mark favourites
*/
const markFavourites = async (req, res) => {
  const user = req.user._id;

  const { productId, variant, quantity } = req.body;

  try {
    const favourites = await FavouritesModel.findOne({ user });

    //If favourites already exists for user,
    if (favourites) {
      const itemIndex = favourites.items.findIndex(
        (item) => item.productId === productId
      );
      //check if product exists or not

      if (itemIndex > -1) {
        const product = favourites.items[itemIndex];
        product.quantity += quantity;
        product.variant = variant;

        favourites.items[itemIndex] = product;
        await favourites.save();
        res.status(200).json(favourites);
      } else {
        favourites.items.push({ productId, variant, quantity });

        await favourites.save();
        res.status(200).json(favourites);
      }
    } else {
      //no favourites exists, create one
      const newFavourites = await FavouritesModel.create({
        user,
        items: [{ productId, variant, quantity }],
      });
      return res.status(201).json(newFavourites);
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

/*
    DELETE | Delete items in favourites
*/
const removeFavourites = async (req, res) => {
  const user = req.user._id;

  const productId = req.query.productId;

  try {
    FavouritesModel.updateOne(
      { user },
      { $pull: { items: { productId: productId } } },
      function (error, data) {
        if (error) res.status(400).send(error);
        else res.status(200).json(data);
      }
    );
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = { getFavourites, markFavourites, removeFavourites };
