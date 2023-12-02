const express = require("express");
const { addFaqs } = require("./faqs.controller");

const faqsRouter = express.Router();

faqsRouter.route("/create").post(addFaqs);

module.exports = faqsRouter;
