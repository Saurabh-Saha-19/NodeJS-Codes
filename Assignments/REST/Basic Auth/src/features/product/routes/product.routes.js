import express from "express";
import {
  addProduct,
  getAllProducts,
  getOneProduct,
  rateProduct,
} from "../controller/product.controller.js";
import basicAuthMiddleware from "../../../middlewares/basicAuth.js";

const router = express.Router();

// get routes
router.route("/").get(basicAuthMiddleware, getAllProducts);
router.route("/:id").get(basicAuthMiddleware, getOneProduct);

// post routes
router.route("/").post(basicAuthMiddleware, addProduct);
router.route("/rateproduct").get(basicAuthMiddleware, rateProduct);

export default router;
