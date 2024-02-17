import jwt from "jsonwebtoken";

const jwtAuth = (req, res, next) => {
  const token = req.headers["authorization"];
  console.log(req.headers);

  if (!token) {
    return res.status(401).send("Unauthorised !");
  }

  try {
    const payLoad = jwt.verify(token, "3dj5kRnDHqzfdEDUveI3QzZqTQZJxS8G");
    console.log(payLoad);
  } catch (err) {
    return res.status(401).send("Unauthorised !");
  }

  next();
};

export default jwtAuth;
