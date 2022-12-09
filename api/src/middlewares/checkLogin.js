/* eslint-disable consistent-return */
const bcrypt = require("bcryptjs");
const UserModel = require("../models/user.model");

const checkMail = (req, res, next) => {

  const { mail: mail } = req.body;
  if (mail === "")
    return res.status(204).json({ message: "messages.error.mail.empty" });
  if (!mail.includes("@")) {
    return res.status(400).json({ message: "messages.error.mail.invalid" });
  }
  next();
};

const checkPasswordSyntax = (req, res, next) => {
  const pwd = req.body.password;
  if (pwd === "")
    return res.status(204).json({ message: "messages.error.password.empty" });
  // Test if password is between 8 and 128 characters long
  if (pwd.length < 8 || pwd.length > 128) {
    return res.status(400).json({ message: "messages.error.password.length" });
  }
  // Test if password contains at least one digit
  if (!pwd.match(/\d/)) {
    return res.status(400).json({ message: "messages.error.password.digit" });
  }
  // Test if password contains at least one lowercase or uppercase letter
  if (!pwd.match(/(?=.*[a-z])(?=.*[A-Z])/)) {
    return res.status(400).json({
      message: "messages.error.password.lowerAndUpper",
    });
  }
  // Test if password contains at least one special character
  if (!pwd.match(/[!@#$%^&*]/)) {
    return res.status(400).json({
      message: "messages.error.password.special",
    });
  }
  next();
};

const checkUserExistsAndValidPassword = (req, res, next) => {
  const { mail: mail } = req.body;

  UserModel.findOne({
    "mail": mail,
  }).exec((err, user) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    if (!user) {
      return res.status(404).json({ message: "messages.error.user.notFound" });
    }
    if (user) {
      next();
    }
  });
};

const checkLogin = {
  checkMail: checkMail,
  checkPasswordSyntax,
  checkUserExistsAndValidPassword,
};

module.exports = checkLogin;