const express = require("express");
const {
  getUsers,
  addUsers,
  updateUsers,
  deleteUsers,
  login,
  getUserInfo,
} = require("./users.controller");

const userRouter = express.Router();

userRouter.route("/").get(getUsers).post(addUsers);

userRouter.route("/:id").put(updateUsers).delete(deleteUsers);

userRouter.route("/login").post(login);

userRouter.route("/register").post(addUsers);

userRouter.route("/info/:id").get(getUserInfo);

module.exports = userRouter;
