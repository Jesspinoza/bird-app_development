import express from "express";
import { ValidationError } from "objection";

import { User } from "../../../models/index.js";

const usersRouter = new express.Router();

usersRouter.post("/", async (req, res) => {
  const { email, password } = req.body;
  try {
    const persistedUser = await User.query().insertAndFetch({ email, password });
    return req.login(persistedUser, () => {
      return res.status(201).json({ user: persistedUser });
    });
  } catch (error) {
    if (error instanceof ValidationError) {
      console.log(error)
      return res.status(422).json({ errors: error.data });
    }
    console.log(error)
    return res.status(422).json({ errors: error });
  }
});

usersRouter.get("/", async (req, res) => {
  const usersData = req.user
  try {
      const users = await User.query()
      
      return res.status(200).json({ users })
  } catch (error) {
      console.log(error)
      return res.status(500).json({ errors: error })
  }
})

export default usersRouter;