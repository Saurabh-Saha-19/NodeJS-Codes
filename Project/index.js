import express from "express";
import ejsLayouts from "express-ejs-layouts";
import path from "path";
import ProductController from "./src/controllers/product.controller.js";

const server = express();
server.use(express.urlencoded({ extended: true }));
server.set("view engine", "ejs");
server.set("views", path.join(path.resolve(), "src", "views"));

server.use(ejsLayouts);
const productController = new ProductController();

server.get("/", (req, res) => {
  productController.getProducts(req, res);
});

server.get("/add", productController.getForm);

server.post("/", productController.getFormData);

server.use(express.static("src/views"));

server.listen(3400, () => {
  console.log("Server is running on port 3400");
});
