// Please don't change the pre-written code

const express = require("express");
const path = require("path");
const server = express();
const publicPath = path.join(__dirname, "public");

const renderStatic = (server, publicPath) => {
  // Write your code here
  server.use(express.static(publicPath));
};

server.get("/", (req, res) => {
  res.send("get method called!");
});

renderStatic(server, publicPath);

module.exports = { renderStatic, server };
