const http = require("http");

const server = http.createServer((req, res) => {
  let body = "";
  if ((req.method = "POST")) {
    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      console.log(body);
      res.end("Data received successfully!");
    });
  } else {
    res.end("welcome to node.js");
  }
});

server.listen(8080, () => {
  console.log("Server is running at port 8080");
});
