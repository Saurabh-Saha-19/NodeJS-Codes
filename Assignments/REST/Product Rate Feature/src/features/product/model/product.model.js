// Please don't change the pre-written code
// Import the necessary modules here
import { getAllUsers } from "../../user/model/user.model.js";

let id = 3;
const products = [
  { id: 1, name: "iphone", price: 100000 },
  { id: 2, name: "oneplus", price: 50000 },
  { id: 3, name: "samsung", price: 60000 },
];

export const fetchAllProducts = () => {
  return products;
};

export const rateProductModel = (productId, userId, rating) => {
  // Write your code here
  // validating the userId provided.

  const allUsers = getAllUsers();
  const result = allUsers.find((u) => {
    return u.id == userId;
  });

  if (!result) {
    return "user not found";
  }

  // validating the productId provided

  const foundProd = products.find((p) => {
    return p.id == productId;
  });

  if (!foundProd) {
    return "product not found";
  }

  // validating the rating
  if (rating < 0 || rating > 5) {
    return "rating should be b/w 0 and 5";
  }

  if (!foundProd.ratings) {
    foundProd.ratings = [];
    foundProd.ratings.push({ userId: userId, rating: rating });
  } else {
    // check if the user has already given the rating before.
    const existingRatingIndex = foundProd.ratings.findIndex((r) => {
      return r.userId == userId;
    });

    if (existingRatingIndex >= 0) {
      foundProd.ratings[existingRatingIndex] = {
        userId: userId,
        rating: rating,
      };
    } else {
      //no existing rating from the user.
      foundProd.ratings.push({ userId: userId, rating: rating });
    }
  }
};
