import { ProductModel } from "./product.model.js";

class ProductController {
  getAllProducts(req, res) {
    const products = ProductModel.getAll();
    res.send(products);
  }

  postProduct(req, res) {
    const { name, price, sizes } = req.body;
    const newProduct = {
      name,
      price: parseFloat(price),
      sizes: sizes.split(","),
      imageUrl: "/uploads/" + req.file.filename,
    };

    ProductModel.addProduct(newProduct);
    res.status(201).send(newProduct);
  }

  getOneProduct(req, res) {
    const id = req.params.id;
    const prodFound = ProductModel.getProdById(id);

    if (prodFound) {
      res.status(200).send(prodFound);
    } else {
      res.status(404).send("Product not found !");
    }
  }

  //query parameter := localhost:3000/api/products/filter?minPrice=40&maxPrice=80&category=Fashion/
  filterProducts(req, res) {
    const minPrice = req.query.minPrice;
    const maxPrice = req.query.maxPrice;
    const category = req.query.category;

    const filterProd = ProductModel.filterProduct(minPrice, maxPrice, category);
    if (filterProd.length) {
      res.status(200).send(filterProd);
    } else {
      res.status(404).send("Not Found!");
    }
  }

  rateProduct(req, res) {
    const { userID, productID, rating } = req.query;
    const error = ProductModel.rateProduct(userID, productID, rating);

    if (error) {
      res.status(400).send("Rating not added");
    } else {
      res.status(201).send("Rating added successfully!");
    }
  }
}

export { ProductController };
