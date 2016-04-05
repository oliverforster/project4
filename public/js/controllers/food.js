angular.module('testApp')
  .controller('FoodController', FoodController);

FoodController.$inject = ['$http'];
function FoodController($http) {
  var self = this;
  this.postcode = null;

  self.newRequest = function () {
    $http({
      method: "POST",
      url: "http://localhost:3000/api/location",
      data: {postcode: this.postcode}
    })
    .then(function(response) {
      this.lat = response.data.results[0].geometry.location.lat;
      this.lng = response.data.results[0].geometry.location.lng;
      $http({
        method: "POST",
        url: "http://localhost:3000/api/food",
        data: {lat: this.lat, lng: this.lng}
      })
      .then(function (response) {
        console.log(response);
      })
    })
    .catch(function(err) {
      console.error(err);
    });
  }
}

// self.newRequest = function () {
//   $http({
//     method: "POST",
//     url: "https://maps.googleapis.com/maps/api/geocode/json?address=sw182dz&key=AIzaSyC5sCyvvW4u4Ii7mQ1l00n17TraWDgtbKk"
//   })
//   .then(function(response) {
//     console.log(response);
//   })
//   .catch(function(err) {
//     console.error(err);
//   });
// }
