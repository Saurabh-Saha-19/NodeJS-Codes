// Please don't change the pre-written code
// Import the necessary modules here
import { authenticateUser, registerUser } from "../models/user.model.js";

export default class UserController {
  getRegister = (req, res, next) => {
    // Write your code here
    return res.render("user-register");
  };
  getLogin = (req, res, next) => {
    // Write your code here
    return res.render("user-login");
  };
  addUser = (req, res) => {
    // Write your code here
    const user = req.body;
    registerUser(user);
    return res.render("user-login");
  };
  loginUser = (req, res) => {
    // Write your code here
    const authUserRes = authenticateUser(req.body);

    if (authUserRes) {
      return res.json({ success: "true", message: "login successfull" });
    } else {
      return res.json({ success: "false", message: "login failed" });
    }
  };
}
