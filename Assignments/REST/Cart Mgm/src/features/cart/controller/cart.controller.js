// Please don't change the pre-written code
// Import the necessary modules here
import { addToCart, removeFromCart } from "../model/cart.model.js";

export const addToCartController = (req, res) => {
  // Write your code here
  const userId = parseFloat(req.cookies.userId);
  const productId = parseFloat(req.query.productId);
  const quantity = parseFloat(req.query.quantity);

  if (!productId || !quantity) {
    return res
      .status(400)
      .json({ success: false, msg: "Invalid productId or quantity" });
  }

  // Call addToCart function to add the item to the cart and get the status
  let addStatus = addToCart(userId, productId, quantity);
  return res.json({ success: true, item: addStatus });
};

export const removeFromCartController = (req, res) => {
  // Write your code here
  const userId = req.userId;
  const cartItemId = req.params.itemId;

  // validating userId and itemId presence.

  const result = removeFromCart(userId, cartItemId);
  // If removeFromCart is successful, return a success response
  if (result != -1) {
    return res.status(200).json({ success: true, deletedCartItem: result });
  } else {
    // If removeFromCart fails, return an error response
    return res
      .status(400)
      .json({ success: false, msg: "operation not allowed" });
  }
};
