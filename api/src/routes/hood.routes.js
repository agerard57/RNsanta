const hoodController = require("../controllers/hood.controller");

module.exports = function (app) {
  // POST create hood / PUT update hood
  app
    .route("/hood")
    .post(hoodController.createHood)
    .put(hoodController.updateHood);

  // GET all hoods by userId / POST new hood
  app
    .route("/hoods/:id([0-9a-f]{24})")
    .get(hoodController.getAllHoodsByUserId);

  // GET hood by id / Put hood
  app
    .route("/hood/:id([0-9a-f]{24})")
    .get(hoodController.getHoodById);
};
