import express from "express";
import { ProductController } from "./product.controller.js";
import uploadFile from "../../middlewares/fileUpload.middleware.js";
import { basicAuth } from "../../middlewares/basicAuth.middleware.js";
import jwtAuth from "../../middlewares/jwtAuth.middleware.js";

const productRouter = express.Router();
const productController = new ProductController();

productRouter.get("/", jwtAuth, productController.getAllProducts);
productRouter.post(
  "/",
  jwtAuth,
  uploadFile.single("imageUrl"),
  productController.postProduct
);
productRouter.get("/filter", jwtAuth, productController.filterProducts);

productRouter.get("/:id", jwtAuth, productController.getOneProduct);
productRouter.get("/filter", jwtAuth, productController.filterProducts);
productRouter.post("/rating", jwtAuth, productController.rateProduct);

export default productRouter;
