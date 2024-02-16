import UserModel from "./user.model.js";

class UserController {
  signIn(req, res) {
    const { email, password } = req.body;
    const userMatch = UserModel.SignIn(email, password);

    if (userMatch) {
      res.status(200).send("Login successfull!");
    } else {
      res.status(404).send("Invalid Credentials");
    }
  }

  signUp(req, res) {
    UserModel.SignUp(req.body);
    res.status(201).send("User registered successfully");
  }
}

export default UserController;
