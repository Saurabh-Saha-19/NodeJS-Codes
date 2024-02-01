import ProductModel from "../models/product.model.js";

class ProductController {
  getProducts(req, res) {
    const products = ProductModel.fetchProducts();
    return res.render("products.ejs", { products: products });
  }

  getForm(req, res) {
    return res.render("add-product.ejs");
  }

  getFormData(req, res) {
    ProductModel.addProduct(req.body);
    const products = ProductModel.fetchProducts();
    return res.render("products.ejs", { products: products });
  }
}

export default ProductController;
