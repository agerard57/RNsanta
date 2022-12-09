const userController = require("../controllers/user.controller");
const checkLogin = require("../middlewares/checkLogin");

module.exports = function (app) {
  // POST user login
  app
    .route("/user/login")
    .post([
      checkLogin.checkMail,
      checkLogin.checkPasswordSyntax,
      checkLogin.checkUserExistsAndValidPassword
    ], userController.login);

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
