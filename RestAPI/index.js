import express from "express";
import productRouter from "./src/features/product/product.route.js";
import bodyParser from "body-parser";

const server = express();
server.use(bodyParser.json());
server.use(express.static("public"));
server.use("/api/products", productRouter);

server.get("/", (req, res) => {
  res.send("Response successfully generated!");
});

export { server };
