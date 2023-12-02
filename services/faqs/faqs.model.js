const mongoose = require("mongoose");

const FaqSchema = mongoose.Schema(
  {
    userid: {
      require: true,
      type: String,
    },
    name: {
      require: true,
      type: String,
    },
    email: {
      require: true,
      type: String,
    },
    inqType: {
      require: true,
      type: String,
    },
    description: {
      require: true,
      type: String,
    },
    answers: {
      require: false,
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const Faq = mongoose.model("Faq", FaqSchema);

module.exports = Faq;
