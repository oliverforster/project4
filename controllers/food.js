var request = require('request-promise');
var User    = require('../models/user')
var cache   = {};


function index(req, res) {
  console.log(req.query.postcode);
  var userId  = req.query.user
  console.log(userId);
  var address = req.query.postcode
  var params  = {
    address: req.query.postcode,
    key: process.env.GOOGLE_API_KEY
  };

  if(cache[req.query.postcode]) {
    return res.status(200).json(cache[req.query.postcode]);
  }
  User.findByIdAndUpdate(userId, { $push: { foodHistory: address }}, { new: true }, function(err, data){
    if(err) res.status(500).json({ message: err });
    // console.log(data.foodHistory);
  });

  request
    .get({
      url: "https://maps.googleapis.com/maps/api/geocode/json",
      qs: params,
      json: true
    })
    .then(function(response) {
      if(response.results.length === 0) {
        return res.status(404).json({ message: "No data found for that postcode" })
      }
      return request.get({
        url: "https://maps.googleapis.com/maps/api/place/nearbysearch/json",
        qs: {
          location: response.results[0].geometry.location.lat + ',' + response.results[0].geometry.location.lng,
          radius: 1000,
          key: process.env.GOOGLE_API_KEY,
          type: 'meal_takeaway'
        },
        json: true
      });
    })
    .then(function(response) {
      if(response.results.length === 0) {
        return res.status(404).json({ message: "No data found for that postcode" })
      }
      cache[req.query.postcode] = response.results;
      return res.status(200).json(cache[req.query.postcode]);
    });
}

module.exports = {
  index: index
}
