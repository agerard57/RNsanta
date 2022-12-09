const mongoose = require("mongoose");

const nameSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
});

const UserSchema = mongoose.Schema(
  {
    name: {
      type: nameSchema,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicNumber: {
      type: Number,
      required: true,
    },
  },
  { toJSON: { getters: true } }
);

const UserModel = mongoose.model("user", UserSchema, "user");

module.exports = UserModel;
