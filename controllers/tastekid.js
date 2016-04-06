var request = require('request-promise');
var User    = require('../models/user')
var cache = {};

function tasteKidGet(req, res) {

  var first = req.body.request.first;
  var second = req.body.request.second;
  var userId = req.body.user._id

  if(req.body.request.second) {
    console.log("Ping");
    var search = [first, second].join(", ");
  } else {
    var search = req.body.request.first;
  }


  if(cache[search]) {
    return res.status(200).json(cache[search]);
  }
  User.findByIdAndUpdate(userId, { $push: { tvHistory: search.toString() }}, { new: true }, function(err, data){
    if(err)  res.status(500).json({ message: err });
  });

  request
    .get({
      url: "https://www.tastekid.com/api/similar",
      qs: {
        q: search,
        info: 1,
        k: process.env.TASTEKID_API_KEY
      },
      json: true
    })
    .then(function (response) {
      console.log(search);
      cache[search] = response.Similar.Results;
      return res.status(200).json(cache[search]);
    });
}


module.exports = {
  get: tasteKidGet
}
