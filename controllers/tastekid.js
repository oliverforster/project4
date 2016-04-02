var request = require('request-promise');
var cache = {};

function tasteKidGet(req, res) {

  console.log(req.body, cache);

  if(cache[req.body.q]) {
    return res.status(200).json(cache[req.body.q]);
  }

  request
    .get({
      url: "https://www.tastekid.com/api/similar",
      qs: {
        q: req.body.name,
        info: 1,
        k: process.env.TASTEKID_API_KEY
      },
      json: true
    })
    .then(function (response) {
      cache[req.body.q] = response.Similar.Results;
      return res.status(200).json(cache[req.body.q]);
    });

//     .get({
//       url: "http://www.tastekid.com/api/similar?q=Silent+Witness&k=" + process.env.TASTEKID_API_KEY
//     })
//     .then({
//       function (response) {
//         return console.log(response);
//       }
//     })
}


module.exports = {
  get: tasteKidGet
}
