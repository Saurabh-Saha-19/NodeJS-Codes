import express from "express";
import productRouter from "./src/features/product/product.route.js";
import bodyParser from "body-parser";
import userRouter from "./src/features/user/user.route.js";
import loggerMiddleware from "./src/middlewares/logger.middleware.js";

const server = express();
server.use(bodyParser.json());
server.use(express.static("public"));
server.use(loggerMiddleware);
server.use("/api/products", productRouter);
server.use("/api/users", userRouter);

server.get("/", (req, res) => {
  res.send("Response successfully generated!");
});

export { server };
