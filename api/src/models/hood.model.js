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

HoodSchema.index({ id: 1 }, { unique: true });

const HoodModel = mongoose.model("hood", HoodSchema);

module.exports = HoodModel;
