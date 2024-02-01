import { body, validationResult } from "express-validator";

const validateRequest = async (req, res, next) => {
  //validate data

  //setup rules for validation.
  const rules = [
    body("name").notEmpty().withMessage("Name is empty !"),
    body("price").isFloat({ gt: 0 }).withMessage("Price must be valid !"),
    //body("imageUrl").isURL().withMessage("Invalid URL !"),
    body("imageUrl").custom((value, { req }) => {
      if (!req.file) {
        throw new Error("Image is required");
      }
      return true;
    }),
  ];

  //run those rules.
  await Promise.all(rules.map((rule) => rule.run(req)));

  //check for errors after running the rules.
  let validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    return res.render("new-product", {
      errorMessage: validationErrors.array()[0].msg,
    });
  }

  next();
};

export default validateRequest;
