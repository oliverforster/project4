var request = require('request-promise');
var cache = {};

function tasteKidGet(req, res) {

  console.log(req.body.first, cache);

  if(cache[req.body.q]) {
    return res.status(200).json(cache[req.body.q]);
  }
  var first = req.body.first
  var second = req.body.second

  if(req.body.second) {
    var search = first, second
  } else {
    var search = req.body.first
  }

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
      cache[req.body.first] = response.Similar.Results;
      return res.status(200).json(cache[req.body.q]);
    });
}


module.exports = {
  get: tasteKidGet
}
