// Please don't change the pre-written code.

const express = require("express");
const app = express();

const logRequest = (req, res, next) => {
  // Write your code here
  console.log(req.method);
  console.log(req.url);
  next();
};

app.get("/", [logRequest], (req, res) => {
  res.send("Coding Ninjas!");
});

module.exports = app;
