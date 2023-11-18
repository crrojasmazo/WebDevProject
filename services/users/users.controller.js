const User = require("./users.model");
const asyncMiddleware = require("../../middleware/asyncMiddleware");
const passwordManager = require("../../utils/passwordManager");

const getUsers = asyncMiddleware(async (_req, res) => {
  const users = await User.find().select("-password");
  res.status(200).send(users);
});

const addUsers = asyncMiddleware(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new Error("Fill all fields");
  }
  const user_exists = await User.findOne({ email });
  if (user_exists) throw new Error("User already exists");

  const hashed_password = await passwordManager.hashPassword(password);
  const new_user = await User.create({
    email,
    password: hashed_password,
  });

  res.status(201).send({
    _id: new_user._id,
    email: new_user.email,
    createdAt: new_user.createdAt,
    updatedAt: new_user.updatedAt,
  });
});

const updateUsers = asyncMiddleware(async (req, res) => {
  if (req.body?.name === "") throw new Error("Name is required");
  const updated_user = await User.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true }
  );
  res.status(200).send(updated_user);
});

const deleteUsers = asyncMiddleware(async (req, res) => {
  const user_id = req.params.id;
  await User.findOneAndDelete(user_id);
  res.status(204).end();
});

const login = asyncMiddleware(async (req, res) => {
  const { email, password } = req.body;
  const existing_user = await User.findOne({ email });
  if (!existing_user) {
    throw new Error("Invalid email");
  }

  if (await passwordManager.comparePassword(password, existing_user.password)) {
    res.status(200).send({
      _id: existing_user._id,
      email: existing_user.email,
      createdAt: existing_user.createdAt,
      updatedAt: existing_user.updatedAt,
    });
  } else throw new Error("Invalid password");
});

module.exports = {
  getUsers,
  addUsers,
  updateUsers,
  deleteUsers,
  login,
};
