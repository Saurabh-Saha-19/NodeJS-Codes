// Please don't change the pre-written code
// Import the necessary modules here

let cartId = 0;
export class cartModel {
  constructor(userId, productId, quantity) {
    this.id = ++cartId;
    this.userId = userId;
    this.productId = productId;
    this.quantity = Number(quantity);
  }
}
const cartItems = [new cartModel(1, 2, 5), new cartModel(3, 3, 10)];

export const addToCart = (userId, productId, quantity) => {
  // Write your code here
  //check for carts for this userid
  const cartItem = cartItems.find((c) => {
    return c.userId == userId && c.productId == productId;
  });

  if (cartItem) {
    cartItem.quantity += quantity;
  } else {
    const newCartItem = new cartModel(userId, productId, quantity);
    cartItems.push(newCartItem);
    console.log(cartItems);
  }

  const userCart = cartItems.filter((item) => {
    return item.userId == userId;
  });

  return userCart;
};

export const removeFromCart = (userId, cartItemId) => {
  // Write your code here

  const cartItemIndex = cartItems.findIndex((item) => {
    return item.id == cartItemId && item.userId == userId;
  });

  if (cartItemIndex == -1) {
    return -1;
  } else {
    const deletedItem = cartItems[cartItemIndex];
    cartItems.splice(cartItemIndex, 1);
    return deletedItem;
  }
};
