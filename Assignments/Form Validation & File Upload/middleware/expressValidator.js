// Please don't change the pre-written code
// Import the necessary modules here
import { body, validationResult } from "express-validator";
export const formValidation = async (req, res, next) => {
  // Write your code here

  //set up rules for validation
  const rules = [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Enter a valid email"),
    //body("imageUrl").isURL().withMessage("Invalid URL !"),
    body("image").custom((value, { req }) => {
      if (!req.file) {
        throw new Error("Profile image is required");
      }
      return true;
    }),
  ];

  //run those rules.
  await Promise.all(rules.map((rule) => rule.run(req)));

  //check for errors after running the rules.
  let validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    return res.json(validationErrors);
  }

  next();
};
