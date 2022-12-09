const mongoose = require("mongoose");

const GiftSchema = mongoose.Schema({
    name: { type: String, required: true },
    price: Number,
    url: String
});

const GiftModel = mongoose.model("gift", GiftSchema);

module.exports = GiftModel;
