import express from "express";
import { ProductController } from "./product.controller.js";
import uploadFile from "../../middlewares/fileUpload.middleware.js";

const productRouter = express.Router();
const productController = new ProductController();

productRouter.get("/", productController.getAllProducts);
productRouter.post(
  "/",
  uploadFile.single("imageUrl"),
  productController.postProduct
);
productRouter.get("/filter", productController.filterProducts);

productRouter.get("/:id", productController.getOneProduct);
productRouter.get("/filter", productController.filterProducts);

export default productRouter;
