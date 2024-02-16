import ProductModel from "../models/product.model.js";
import UserModel from "../models/user.model.js";

class UserController {
  getRegisterPage(req, res) {
    return res.render("register", { errorMessage: null });
  }

  getLoginPage(req, res) {
    return res.render("login", { errorMessage: null, success: null });
  }

  postRegisterUser(req, res) {
    const newUser = req.body;
    UserModel.addUser(newUser);
    res.render("login", { errorMessage: null, success: true });
  }

  postLoginUser(req, res, next) {
    const { email, password } = req.body;
    const isValidUser = UserModel.isValidUser(email, password);
    console.log(isValidUser);
    if (isValidUser) {
      req.session.email = email;
      const products = ProductModel.get();
      res.render("products", { products: products, email: req.session.email });
    } else {
      res.render("login", {
        errorMessage: "Invalid Credentials",
        success: null,
      });
    }
    next();
  }

  getLogout(req, res) {
    req.session.destroy((error) => {
      if (error) console.log(error);
      else res.redirect("/login");
    });

    res.clearCookie("lastVisit");
  }
}

export default UserController;
