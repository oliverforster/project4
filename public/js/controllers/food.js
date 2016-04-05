angular.module('testApp')
  .controller('FoodController', FoodController);

FoodController.$inject = ['$http'];
function FoodController($http) {
  var self = this;
  this.search = {};

  self.newRequest = function () {
    $http({
      method: "POST",
      url: "http://localhost:3000/api/food",
      data: {request: this.search, user: this.currentUser}
    })
    .then(function(response) {
      console.log("ping!!");
      })
    })
    .catch(function(err) {
      console.error(err);
    });
  }
}
