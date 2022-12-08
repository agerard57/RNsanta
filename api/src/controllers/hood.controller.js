const HoodModel = require("../models/hood.model");
const path = require("path");

const hoodOptions = (request) => {
  return {
    name: request.name,
    hexColor: request.hexColor,
    gifts: [{
      userId: request.userId,
    }], 
  }
}

// //////////////////
// Get all controller
exports.getAll = (_req, res) => {
  HoodModel.find().then((hoods) => {
    res.json(hoods);
  });
};

// //////////////////
// Get one controller
exports.getOne = (req, res) => {
  const id = req.params.id;

  HoodModel.findById(id).then((hood) => {
      res.json(hood);
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
  const hood = new HoodModel(HoodOptions(req.body));
  hood
    .save()
    .then((_message) => {
      res.json("Your hood has been added!");
    })
    .catch((_error) => {
      res.status(500).json("An error occurred!");
    });
};

// //////////////////
// Update controller
exports.update = (req, res) => {
  const findById = { _id: req.params.id };

  HoodModel.findOneAndReplace(findById, hoodOptions(req.body), { new: true })
    .then((_message) => {
      res.json("Your hood has been updated!");
    })
    .catch((error) => {
      res.status(500).json(error);
    });

};
