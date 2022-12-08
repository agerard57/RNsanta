const HoodModel = require("../models/hood.model");

const hoodOptions = (request) => {
  return {
    name: request.name,
    hexColor: request.hexColor,
    gifts: [{
      userId: request.userId,
    }], 
  }
}

// /////////////////////
// Get all hoods by userId controller
exports.getAllHoodsByUserId = (req, res) => {
  const userId = req.params.id;

  HoodModel.find({ "gifts.userId": userId }).then((hoods) => {
    res.status.json(hoods);
  });
};

// /////////////////////
// Get hood by id controller
exports.getHoodById = (req, res) => {
  const hoodId = req.params.id;

  HoodModel.findById(hoodId).populate("gifts.userId").populate("gifts.gift").then((hood) => {
    res.json(hood);
  });
};

// //////////////////
// Create hood controller
exports.createHood = (req, res) => {
  const hood = new HoodModel(hoodOptions(req.body));
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
// Update hood controller
exports.updateHood = (req, res) => {
  const hoodId = req.params.id;
  const hood = new HoodModel(hoodOptions(req.body));

  HoodModel.findByIdAndUpdate(hoodId, hood, { new: true }).then((_message) => {
    res.json("Your hood has been updated!");
  });
};

