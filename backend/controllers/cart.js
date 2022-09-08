const CartsModel = require("../models/cart");

/*
    GET | Get cart items
*/
const getCart = async (req, res) => {
  const user = req.user._id;

  try {
    const cart = await CartsModel.findOne({ user });

    if (cart && cart.items.length > 0) {
      res.status(200).json(cart);
      return;
    }

    res.status(200).json({ message: "Cart is empty!" });
  } catch (error) {
    res.status(400).json(error);
  }
};

/*
    POST | Create Cart
*/
const createCart = async (req, res) => {
  const user = req.user._id;

  const { productId, variant, quantity } = req.body;

  try {
    const cart = await CartsModel.findOne({ user });

    //If cart already exists for user,
    if (cart) {
      const itemIndex = cart.items.findIndex(
        (item) => item.productId === productId
      );
      //check if product exists or not

      if (itemIndex > -1) {
        const product = cart.items[itemIndex];
        product.quantity += quantity;
        product.variant = variant;

        cart.items[itemIndex] = product;
        await cart.save();
        res.status(200).json(cart);
      } else {
        cart.items.push({ productId, variant, quantity });

        await cart.save();
        res.status(200).json(cart);
      }
    } else {
      //no cart exists, create one
      const newCart = await CartsModel.create({
        user,
        items: [{ productId, variant, quantity }],
      });
      return res.status(201).json(newCart);
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

/*
    DELETE | Delete items in cart
*/
const removeItem = async (req, res) => {
  const user = req.user._id;

  const productId = req.query.productId;

  try {
    CartsModel.updateOne(
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

module.exports = { getCart, createCart, removeItem };
