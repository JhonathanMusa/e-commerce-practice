import express from "express";
import userRouter from "./routers/userRouter.js";
import productRouter from "./routers/productRouter.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dotenv.config();

mongoose.connect(
  process.env.MONGODB_URL || "mongodb://localhost:27017/pcStore",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
