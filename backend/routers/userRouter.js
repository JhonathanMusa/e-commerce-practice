import express from "express";
import User from "../models/userModel.js";
import data from "../data.js";

const userRouter = express.Router();

userRouter.get("/seed", async (req, res) => {
  const createUsers = await User.insertMany(data.users);
  res.send({ createUsers });
});

export default userRouter;
