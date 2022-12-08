const HoodModel = require("../models/hood.model");
const GiftModel = require("../models/gift.model");

const giftOptions = (request) => {
  return {
    name: request.name,
    url: request.url,
    price: request.price,
  }
}

