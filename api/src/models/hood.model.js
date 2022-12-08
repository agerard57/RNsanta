const mongoose = require("mongoose");

const giftSchema = new mongoose.Schema({
    name: String,
    price: Number,
    url: String
});

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
        type: String,
        ref: "user",
        required: true,
      },
      gift: [ giftSchema ]
    }],
  },
  { toJSON: { getters: true } }
);

HoodSchema.index({ id: 1 }, { unique: true });

const HoodModel = mongoose.model("hood", HoodSchema);

module.exports = HoodModel;
