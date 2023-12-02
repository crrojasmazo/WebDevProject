const Faq = require("./faqs.model");
const asyncMiddleware = require("../../middleware/asyncMiddleware");
const passwordManager = require("../../utils/passwordManager");

const getFaqs = asyncMiddleware(async (_req, res) => {
  const faqs = await Faq.find();
  res.status(200).send(faqs);
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

const getFaqsById = asyncMiddleware(async (req, res) => {
  const { userid } = req.body;
  const faqsById = await Faq.find({ userid });
  res.status(200).send(faqsById);
});

module.exports = {
  addFaqs,
  getFaqs,
  getFaqsById,
};
