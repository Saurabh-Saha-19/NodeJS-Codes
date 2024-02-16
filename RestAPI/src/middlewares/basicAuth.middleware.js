import UserModel from "../features/user/user.model.js";

const basicAuth = (req, res, next) => {
  //check if authorization header is empty
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res.status(401).send("Authorization details not found !");
  }

  console.log(authHeader);

  //extract the credentials from Auth Header
  // [Basic <base64 encoded>]

  const b64Cred = authHeader.replace("Basic ", "");
  console.log(b64Cred);

  //decode the credentails.

  const decodedCred = Buffer.from(b64Cred, "base64").toString("utf8");

  //decoded credentails is in the form [username:password];
  const creds = decodedCred.split(":");
  console.log(creds);

  const users = UserModel.getAllUsers();
  const isValid = users.find((u) => {
    if (u.email === creds[0] && u.password === creds[1]) {
      return true;
    } else return false;
  });

  if (isValid) next();
  else {
    res.status(401).send("Invalid Credentails");
  }
};

export { basicAuth };
