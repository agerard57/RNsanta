const hoodController = require("../controllers/hood.controller");

module.exports = function (app) {
  // GET all hoods / POST new hood
  app
    .route("/hoods")
    .get(hoodController.getAll)
    .post(hoodController.add);

  // GET hood by id / Put hood
  app
    .route("/hood/:id([0-9a-f]{24})")
    .get(hoodController.getOne)
    .put(hoodController.update);
};
