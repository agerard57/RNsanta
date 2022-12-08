const mongoose = require("mongoose");

const GiftSchema = mongoose.Schema({
    name: { type: String, required: true },
    price: Number,
    url: String
});

GiftSchema.index({ id: 1 }, { unique: true });

const GiftModel = mongoose.model("gift", GiftSchema);

module.exports = GiftModel;
