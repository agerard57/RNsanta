const UserModel = require("../models/user.model");

const UserOptions = (request) => {
  return {
    name: {
      firstName: request.firstName,
      lastName: request.lastName
    },
    mail: request.mail,
    password: request.password,
  }
}

// TODO improve security of login

const generatePictureProfileNumber = () => {
  const max = 5;
  const min = 0;

  return Math.floor(
    Math.random() * (max - min) + min
  )
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