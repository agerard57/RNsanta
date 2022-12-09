const mongoose = require("mongoose");

const HoodSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    hexColor: {
      type: String,
      required: true
    },
    gifts: [{
      userId: {
        type: "ObjectId",
        ref: "user",
      },
      giftId: [{
        type: "ObjectId",
        ref: "gift",
      }],
    }],
  },
  { toJSON: { getters: true } }
);

const HoodModel = mongoose.model("hood", HoodSchema, "hoods");

module.exports = HoodModel;
