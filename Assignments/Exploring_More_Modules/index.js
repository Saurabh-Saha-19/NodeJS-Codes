// Please do not change the prewritten code

import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  //  Write your code here
  if ((req.method = "PUT")) {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      res.end("data received");
      fs.appendFileSync("data.txt", body);
      const data = fs.readFileSync("data.txt", { encoding: "utf8" });
      console.log(data);
    });
  } else {
    res.end("Welcome to node.js server");
  }
});

export default server;
