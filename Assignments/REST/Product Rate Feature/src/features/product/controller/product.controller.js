// Please don't change the pre-written code
// Import the necessary modules here
// Write your code here

import { fetchAllProducts } from "../model/product.model.js";
import { rateProductModel } from "../model/product.model.js";

export const getAllProducts = (req, res, next) => {
  const products = fetchAllProducts();
  res.json({ success: true, products });
};
export const getOneProduct = (req, res, next) => {
  res.json({ success: true, msg: "getOneProduct working" });
};
export const addProduct = (req, res, next) => {
  res.json({ success: true, msg: "addProduct working" });
};
export const rateProduct = (req, res, next) => {
  // Write your code here
  const { userId, productId, rating } = req.query;
  const error = rateProductModel(productId, userId, rating);

  if (error) {
    res.status(400).json({
      success: false,
      msg: error,
    });
  } else {
    const products = fetchAllProducts();
    const product = products.find((p) => {
      return p.id == productId;
    });
    res.status(201).json({
      success: true,
      msg: product,
    });
  }
};
