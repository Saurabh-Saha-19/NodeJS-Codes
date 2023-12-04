const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);

  if (req.url == "/product") {
    return res.end("This is Product page");
  } else if (req.url == "/user") {
    return res.end("This is User page");
  }

  res.end("Welcome to NodeJS Server");
});

server.listen(8080, () => {
  console.log("Server is running at port 8080");
});
