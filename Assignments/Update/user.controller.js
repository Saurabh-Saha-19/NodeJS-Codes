// Please don't change the pre-written code
// Import the necessary modules here

import { updateUsers, users } from "./user.model.js";

export const renderUpdateForm = (req, res) => {
  res.render("update-form", { user: users[0] });
};

// Write your code here
export const updateUser = (req, res) => {
  updateUsers(req.body);
  let len = users.length;
  res.render("update-form", { user: users[len - 1] });
};
