const express = require('express')
const {  getUsers, addUsers, updateUsers, deleteUsers } = require('./users.controller')

const userRouter = express.Router()

userRouter.route('/')
  .get(getUsers)
  .post(addUsers)

userRouter.route('/:id')
  .put(updateUsers)
  .delete(deleteUsers)

module.exports = userRouter