// Please don't change the pre-written code
// Import the necessary modules here

import { getAllUsers } from "../features/user/model/user.model.js";

const basicAuthMiddleware = (req, res, next) => {
  // Write your code here

  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res
      .status(401)
      .json({ status: "false", msg: "no authorization details found" });
  }

  const b64Cred = authHeader.replace("Basic ", "");

  const decodedCred = Buffer.from(b64Cred, "base64").toString("utf8");
  const cred = decodedCred.split(":");

  const users = getAllUsers();
  const isValid = users.find((u) => {
    if (u.email === cred[0] && u.password === cred[1]) {
      return true;
    } else return false;
  });

  if (isValid) next();
  else {
    res.status(401).json({ status: "false", msg: "authorization failed" });
  }
};

export default basicAuthMiddleware;
