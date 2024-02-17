import UserModel from "./user.model.js";
import jwt from "jsonwebtoken";

class UserController {
  signIn(req, res) {
    const { email, password } = req.body;
    const userMatch = UserModel.SignIn(email, password);

    if (userMatch) {
      const token = jwt.sign(
        { userID: userMatch.id, email: userMatch.email },
        "3dj5kRnDHqzfdEDUveI3QzZqTQZJxS8G",
        { expiresIn: "1h" }
      );
      res.status(200).send(token);
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
