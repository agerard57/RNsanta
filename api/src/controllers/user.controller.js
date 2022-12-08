const UserModel = require("../models/user.model");
const path = require("path");

const UserOptions = (request) => {
  return {
    name: {
      firstName: request.firstName,
      lastName: request.lastName
    },
    mail: request.mail,
    password: request.password,
    profilePicNumber: request.profilePicNumber,   
  }
}

// //////////////////
// Get all controller
exports.getAll = (_req, res) => {
  UserModel.find().then((users) => {
    res.json(users);
  });
};

// //////////////////
// Get one controller
exports.getOne = (req, res) => {
  const id = req.params.id;

  UserModel.findById(id).then((user) => {
      res.json(user);
    })
    .catch((error) => {
      res.status(500).json({
        message: error,
      });
    });
};

// //////////////////
// Add controller
exports.add = (req, res) => {
  const user = new UserModel(UserOptions(req.body));
  user
    .save()
    .then((_message) => {
      res.json("Your user has been added!");
    })
    .catch((_error) => {
      res.status(500).json("An error occurred!");
    });
};