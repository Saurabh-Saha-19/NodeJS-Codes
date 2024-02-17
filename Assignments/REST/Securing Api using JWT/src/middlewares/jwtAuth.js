// Please don't change the pre-written code
// Import the necessary modules here
import jwt from "jsonwebtoken";

const jwtAuth = (req, res, next) => {
  // Write your code here
  if (req.cookies.jwtToken) {
    try {
      const token = req.cookies.jwtToken;
      const payLoad = jwt.verify(token, "3dj5kRnDHqzfdEDUveI3QzZqTQZJxS8G");
      console.log(payLoad);
    } catch (err) {
      return res.status(401).json({ success: false, msg: err });
    }

    next();
  } else {
    return res.status(401).json({ success: false, msg: "error" });
  }
};

export default jwtAuth;
