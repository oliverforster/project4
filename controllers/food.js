var request = require('request-promise');
var User    = require('../models/user')
var cache   = {};

function googlePlacesGet(req, res) {
  console.log(req.body);
  return res.status(200).json("got it")
}

module.exports = {
  get: googlePlacesGet
}
