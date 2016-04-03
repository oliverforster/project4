var request = require('request-promise');
var cache = {};

function tasteKidGet(req, res) {

  console.log(req.body.first, cache);

  var first = req.body.first;
  var second = req.body.second;

  if(req.body.second) {
    console.log("Ping");
    var search = [first, second].join(", ");
  } else {
    var search = req.body.first;
  }

  if(cache[search]) {
    return res.status(200).json(cache[search]);
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
      console.log(search);
      cache[search] = response.Similar.Results;
      return res.status(200).json(cache[search]);
    });
}


module.exports = {
  get: tasteKidGet
}
