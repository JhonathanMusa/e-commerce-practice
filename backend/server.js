import express from "express";
import data from "./data.js";
import userRouter from "./routers/userRouter.js";
import mongoose from "mongoose";

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect(
  process.env.MONGODB_URL || "mongodb://localhost:27017/pcStore",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);

app.get("/api/products/:id", (req, res) => {
  const product = data.products.find((x) => x._id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product Not Found" });
  }
});

app.use("/api/users", userRouter);

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
