import path from "path";
import ProductModel from "../models/product.model.js";

class ProductController {
  getProducts(req, res) {
    let products = ProductModel.get();
    return res.render("products", {
      products: products,
      email: req.session.email,
    });
  }

  getAddForm(req, res) {
    return res.render("new-product", {
      errorMessage: null,
      email: req.session.email,
    });
  }

  addNewProduct(req, res) {
    // access the submitted form data.
    //console.log(req.body);
    const { name, desc, price } = req.body;
    const imageUrl = "images/" + req.file.filename;
    ProductModel.add(name, desc, price, imageUrl);
    let products = ProductModel.get();
    return res.render("products", {
      products: products,
      email: req.session.email,
    });
  }

  getUpdateProductView(req, res) {
    //1. if the product exists then render the view.
    const id = req.params.id;
    const productFound = ProductModel.getById(id);
    if (productFound) {
      res.render("update-product", {
        product: productFound,
        errorMessage: null,
        email: req.session.email,
      });
    } else {
      res.status(401).send("Product not found");
    }
  }

  postUpdateProduct(req, res) {
    ProductModel.update(req.body);
    let products = ProductModel.get();
    return res.render("products", {
      products: products,
      email: req.session.email,
    });
  }

  getDeleteProduct(req, res, next) {
    const id = Number(req.params.id);
    const productFound = ProductModel.getById(id);
    if (!productFound) {
      return res.status(401).send("Product not found");
    }
    ProductModel.delete(id);
    next();
  }
}

export default ProductController;
