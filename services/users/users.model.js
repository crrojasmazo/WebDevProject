const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    email: {
      require: true,
      type: String,
      unique: true,
    },
    password: {
      require: true,
      type: String,
    },
    name: {
      require: false,
      type: String,
    },
    profession: {
      require: false,
      type: String,
    },
    about: {
      require: false,
      type: String,
    },
    interest: {
      require: false,
      type: String,
    },
    contact: {
      require: false,
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
