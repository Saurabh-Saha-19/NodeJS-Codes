import express from "express";
import { ProductController } from "./product.controller.js";
import uploadFile from "../../middlewares/fileUpload.middleware.js";
import { basicAuth } from "../../middlewares/basicAuth.middleware.js";

const productRouter = express.Router();
const productController = new ProductController();

productRouter.get("/", basicAuth, productController.getAllProducts);
productRouter.post(
  "/",
  basicAuth,
  uploadFile.single("imageUrl"),
  productController.postProduct
);
productRouter.get("/filter", basicAuth, productController.filterProducts);

productRouter.get("/:id", basicAuth, productController.getOneProduct);
productRouter.get("/filter", basicAuth, productController.filterProducts);

export default productRouter;
