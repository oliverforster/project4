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
      data: {request: this.postcode}
    })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(err) {
      console.error(err);
    });
  }
}
