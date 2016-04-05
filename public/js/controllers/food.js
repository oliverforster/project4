angular.module('testApp')
  .controller('FoodController', FoodController);

FoodController.$inject = ['$http'];
function FoodController($http) {
  var self = this;
  this.postcode = null;

  self.newRequest = function () {
    $http({
      method: "POST",
      url: "http://localhost:3000/api/food",
      data: {postcode: this.postcode}
    })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(err) {
      console.error(err);
    });
  }
}
