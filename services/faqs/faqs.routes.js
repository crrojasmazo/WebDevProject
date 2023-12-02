const express = require("express");
const {
  addFaqs,
  getFaqs,
  getFaqsById,
  answerFaq,
} = require("./faqs.controller");

const faqsRouter = express.Router();

faqsRouter.route("/create").post(addFaqs);

faqsRouter.route("/answer").post(answerFaq);

faqsRouter.route("/getfaqs").get(getFaqs).post(getFaqsById);

module.exports = faqsRouter;
