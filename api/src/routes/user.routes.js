const userController = require("../controllers/user.controller");

module.exports = function (app) {
  // GET all users / POST new user
  app
    .route("/users")
    .get(userController.getAll)
    .post(userController.add);

  // GET user by id
  app
    .route("/user/:id([0-9a-f]{24})")
    .get(userController.getOne);
};
