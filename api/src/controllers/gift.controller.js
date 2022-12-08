const HoodModel = require("../models/hood.model");
const GiftModel = require("../models/gift.model");

const giftOptions = (request) => {
  return {
    name: request.name,
    url: request.url,
    price: request.price,
  }
}

// /////////////////////
// Add new gift controller
exports.addGift = (req, res) => {
    const {hoodId, userId} = req.params;

    const gift = new GiftModel(giftOptions(req.body));
    gift
        .save()
        .then((gift) => {
            HoodModel.findByIdAndUpdate
            (hoodId, {$push: {gifts: {userId: userId, gift: gift._id}}}, {new: true})
                .then((hood) => {
                    res.status(204).json(hood);
                })
        })
        .catch(() => {
            res.status(500).json("An error occurred!");
        });
};

// /////////////////////
// Edit gift controller
exports.editGift = (req, res) => {
    const {hoodId, giftId} = req.params;

    const gift = new GiftModel(giftOptions(req.body));

    GiftModel
        .findById
        (giftId, gift, {new: true})
        .then((gift) => {
            HoodModel
                .findByIdAndUpdate
                (hoodId, {$push: {gifts: {gift: gift._id}}}, {new: true})
                .then((hood) => {
                    res.status(204).json(hood);
                })
        })
        .catch(() => {
            res.status(500).json("An error occurred!");
        });
};

// /////////////////////
// Delete gift controller
exports.deleteGift = (req, res) => {
    const {hoodId, giftId} = req.params;

    GiftModel.findByIdAndDelete(giftId).then((gift) => {
        HoodModel.findByIdAndUpdate
        (hoodId, {$pull: {gifts: {gift: gift._id}}}, {new: true})
            .then((hood) => {
                res.status(204).json(hood);
            })
    })
        .catch(() => {
            res.status(500).json("An error occurred!");
        });
};

