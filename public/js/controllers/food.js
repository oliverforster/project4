angular.module('testApp')
  .controller('FoodController', FoodController);

FoodController.$inject = ['$http'];
function FoodController($http) {
  var self = this;
  this.postcode = null;
  self.results = [];

  self.getFood = function () {
    $http({
      method: "GET",
      url: "http://localhost:3000/api/food",
      params: { postcode: self.postcode }
    })
    .then(function(response) {
      console.log(response);
      self.postcode = null;
      self.results = [];
      response.data.forEach(function(dataItem){
        self.results.push(dataItem);
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
