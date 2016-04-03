var User = require('../models/user');

function usersIndex(req, res) {
  User.find(function(err, users) {
    if(err) return res.status(500).json({ message: err });
    return res.status(200).json(users);
  });
}

function usersCreate(req, res){
  var user = req.body;
  User.create(user, function(err, user){
    if(err) return res.status(500).json({ message: err });
    if(!user) return res.status(400).json({ message: "Invalid data"});
      return res.status(201).json(user);
  })
}

function usersShow(req, res){
  var id = req.params.id;

  User.findById({ _id: id }, function(err, user) {
    if (err) return res.status(500).json({ message: err });
    if (!user) return res.status(404).json({ message: "Invalid data"});
    res.status(200).send(user);
  })
}

function usersDelete(req, res){
  User.findByIdAndRemove(req.params.id, function(err, user) {
    if(err) return res.status(500).json({ message: err });
    return res.status(204).send();
  });
}

function usersUpdate(req, res) {
  User.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(err, user) {
    if(err) return res.status(500).json({ message: err });
    return res.status(200).json(user);
  });
}

module.exports = {
  index: usersIndex,
  create: usersCreate,
  show: usersShow,
  update: usersUpdate,
  delete: usersDelete
}
