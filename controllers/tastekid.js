var request = require('request-promise');

function tasteKidGet() {
  request
    // .get({
    //   url: "https://www.tastekid.com/read/api/similar?",
    //   paramaters: {
    //     q: "spooks",
    //     info: 1,
    //     k: process.env.TASTEKID_API_KEY
    //   }
    // })
    // .then({
    //   function (response) {
    //     return console.log(response);
    //   }
    // })

    .get({
      url: "http://www.tastekid.com/read/api/similar?q=spooks&verbose=1&k=" + process.env.TASTEKID_API_KEY
    })
    .then({
      function (response) {
        return console.log(response);
      }
    })
}


module.exports = {
  get: tasteKidGet
}
