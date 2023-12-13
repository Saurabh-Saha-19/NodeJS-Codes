import ProductModel from "../models/product.model.js";

class ProductController {
  getProducts(req, res) {
    // console.log(path.resolve());
    // const filePath = path.join(path.resolve(), "src", "views", "products.html");

    const products = ProductModel.fetchProducts();
    return res.render("products.ejs", { products: products });
  }
}

export default ProductController;
