import express from "express";
import ProfilePageShowRouter from "./api/v1/ProfilePageShowRouter.js";
import userSessionsRouter from "./api/v1/userSessionsRouter.js";
import usersRouter from "./api/v1/usersRouter.js";
import clientRouter from "./clientRouter.js";

const rootRouter = new express.Router();

rootRouter.use("/", clientRouter);
rootRouter.use("/api/v1/users", usersRouter);
rootRouter.use("/api/v1/user-sessions", userSessionsRouter);
rootRouter.use("api/v1/users/:id", ProfilePageShowRouter)

//place your server-side routes here

export default rootRouter;
