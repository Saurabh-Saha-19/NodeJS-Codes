// Please don't change the pre-written code

export const validateBlog = (req, res) => {
  // Write your code here
  //validation codes goes here
  const { title, description, image } = req.body;
  let errors = [];
  if (!title) {
    errors.push("The title field should not be empty.");
    errors.push("The title field should contain at least 3 characters.");
  } else {
    if (title.trim().length < 3) {
      errors.push("The title field should contain at least 3 characters.");
    }
  }

  if (!description) {
    errors.push("The description field should not be empty.");
    errors.push("The description field should contain at least 10 characters.");
  } else {
    if (description.length < 10) {
      errors.push(
        "The description field should contain at least 10 characters."
      );
    }
  }

  try {
    const validUrl = new URL(image);
  } catch (err) {
    errors.push("The image URL provided should be a valid URL.");
  }

  if (errors.length > 0) {
    return res.render("addBlog", { errors: errors, success: false });
  }
  res.render("addBlog", { errors: null, success: true });
};
export const renderBlogForm = (req, res) => {
  res.status(201).render("addBlog", { errors: null, success: false });
};
