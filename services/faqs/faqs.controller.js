const Faq = require("./faqs.model");
const asyncMiddleware = require("../../middleware/asyncMiddleware");
const passwordManager = require("../../utils/passwordManager");

const getUsers = asyncMiddleware(async (_req, res) => {
  const users = await User.find().select("-password");
  res.status(200).send(users);
});

const addFaqs = asyncMiddleware(async (req, res) => {
  const { userid, name, email, inqType, description } = req.body;
  if (!userid || !name || !email || !inqType || !description) {
    throw new Error("Fill all fields");
  }

  const new_faq = await Faq.create({
    userid,
    name,
    email,
    inqType,
    description,
  });

  res.status(201).send({
    _id: new_faq._id,
    userid: new_faq.userid,
    name: new_faq.name,
    email: new_faq.email,
    inqType: new_faq.inqType,
    description: new_faq.description,
    createdAt: new_faq.createdAt,
    updatedAt: new_faq.updatedAt,
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
      contact: existing_user.contact,
      interest: existing_user.interest,
      name: existing_user.name,
      profession: existing_user.profession,
      about: existing_user.about,
    });
  } else throw new Error("Invalid password");
});

module.exports = {
  addFaqs,
};
