const auth = (req, res, next) => {
  if (req.session.email) {
    next();
  } else {
    return res.render("login", {
      errorMessage: "You must Login first",
      success: null,
    });
    // res.redirect("/login");
  }
};

export { auth };
