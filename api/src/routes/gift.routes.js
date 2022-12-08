const giftController = require("../controllers/gift.controller");

module.exports = function (app) {
  // POST add gift / PUT edit gift
  app
    .route("/gift")
    .post(giftController.addGift)
    .put(giftController.editGift);

  // POST remove gift
  app.route("/gift/delete")
    .post(giftController.deleteGift);
};

