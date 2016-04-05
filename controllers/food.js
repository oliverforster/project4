var request = require('request-promise');
var User    = require('../models/user')
var cache   = {};

function googlePlacesGet(req, res) {
  console.log(req.body);
}

module.exports = {
  get: googlePlacesGet
}
