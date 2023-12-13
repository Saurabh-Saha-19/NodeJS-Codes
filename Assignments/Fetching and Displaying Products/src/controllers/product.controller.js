// Import the necessary modules here
import ProductModel from "../models/product.model.js";

export default class ProductController {
  getProducts = (req, res) => {
    //  Write your code here
    let products = ProductModel.fetchProducts();
    console.log(products);
    res.send(products);
  };
}
