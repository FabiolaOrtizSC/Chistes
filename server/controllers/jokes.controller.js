const Broma = require("../models/jokes.model");

module.exports.findAllJokes = (req, res) => {
  Broma.find()
    .then(allDaJokes => res.json({ bromas: allDaJokes }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneSingleJoke = (req, res) => {
	Broma.findOne({ _id: req.params.id })
		.then(oneSingleJoke => res.json({ broma: oneSingleJoke }))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewJoke = (req, res) => {
  Broma.create(req.body)
    .then(newlyCreatedJoke => res.json({ user: newlyCreatedJoke }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateExistingJoke = (req, res) => {
  Broma.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updatedJoke => res.json({ broma: updatedJoke }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingJoke = (req, res) => {
  Broma.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};
