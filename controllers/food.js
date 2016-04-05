var request = require('request-promise');
var User    = require('../models/user')
var cache   = {};

function googlePlacesGet(req, res) {
  var params = {
    address: req.body.postcode,
    key: process.env.GOOGLE_API_KEY
  };
  request
    .get({
      url: "https://maps.googleapis.com/maps/api/geocode/json?address=sw182dz&key="+ process.env.GOOGLE_API_KEY
    })
    .then(function (response) {
      console.log(response);
      return res.status(200).send(data);
    });
}

module.exports = {
  get: googlePlacesGet
}
