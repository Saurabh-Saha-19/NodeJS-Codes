import express from "express";
import path from "path";
import ejsLayouts from "express-ejs-layouts";
import ProductController from "./src/controllers/product.controller.js";
import validationMiddleware from "./src/middleware/validation.middleware.js";
import uploadFile from "./src/middleware/file-upload.middleware.js";
import UserController from "./src/controllers/user.controller.js";
import session from "express-session";
import { auth } from "./src/middleware/auth.middleware.js";
import cookieParser from "cookie-parser";
import { setLastVisit } from "./src/middleware/lastVisit.middleware.js";

const server = express();

//parse the form data.
server.use(express.urlencoded({ extended: true }));
server.use(express.static("public"));
server.use(
  session({
    secret: "SecretKey",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);
server.use(cookieParser());
//setting up the view engine.
server.set("view engine", "ejs");
server.set("views", path.join(path.resolve(), "src", "views"));
server.use(ejsLayouts);
//creating an instance of the ProductController class.
const productController = new ProductController();
server.get("/", auth, productController.getProducts);
server.get("/new", auth, productController.getAddForm);
server.get("/update/:id", auth, productController.getUpdateProductView);
server.post(
  "/delete/:id",
  auth,
  productController.getDeleteProduct,
  productController.getProducts
);
server.post(
  "/",
  auth,
  uploadFile.single("imageUrl"),
  validationMiddleware,
  productController.addNewProduct
);
server.post("/update", auth, productController.postUpdateProduct);

const userController = new UserController();
server.get("/register", userController.getRegisterPage);
server.get("/login", userController.getLoginPage);
server.post("/register", userController.postRegisterUser);
server.post("/login", setLastVisit, userController.postLoginUser);
server.get("/logout", userController.getLogout);

export { server };
