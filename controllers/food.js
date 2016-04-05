var request = require('request-promise');
var User    = require('../models/user')
var cache   = {};

function googlePlacesGet(req, res) {
  var params = {
    adress: req.body.postcode,
    key: process.env.GOOGLE_API_KEY
  };
  request
    .get({
      url: "http://maps.googleapis.com/maps/api/geocode/json/",
      qs: params
    })
    .then(function (response) {
      return res.status(200).json(response);
    });
}

module.exports = {
  get: googlePlacesGet
}
