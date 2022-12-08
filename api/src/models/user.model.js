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
    mail: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    profilePicNumber: {
      type: Number,
      required: true
    }
  },
  { toJSON: { getters: true } }
);

UserSchema.index({ id: 1 }, { unique: true });

const UserModel = mongoose.model("user", UserSchema);

module.exports = UserModel;
