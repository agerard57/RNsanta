const cors = require("cors");
const express = require("express");
const morgan = require("morgan");

module.exports = function routes(app) {
  // /////////////////////////
  // Middlewares instantiated
  app.use(cors());
  app.use(morgan("tiny"));
  app.use(express.json({ extended: true}));

  // ///////
  // Routes
  require("./user.routes")(app);
  require("./gift.routes")(app);
  require("./hood.routes")(app);
};
