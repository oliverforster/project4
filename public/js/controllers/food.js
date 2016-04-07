angular.module('testApp')
  .controller('FoodController', FoodController);

FoodController.$inject = ['$http', 'tokenService', '$state', 'API_URL'];
function FoodController($http, tokenService, $state, API_URL) {
  var self = this;
  this.postcode = null;
  self.results = [];
  this.chosen = null;

  self.getFood = function () {
    this.currentUser = tokenService.getUser();
    $http({
      method: "GET",
      url: API_URL + "/api/food",
      params: { postcode: self.postcode, user: this.currentUser._id }
    })
    .then(function(response) {
      console.log(response);
      self.postcode = null;
      self.results = [];
      response.data.forEach(function(dataItem){
        if(!!dataItem.opening_hours.open_now) {
          self.results.push(dataItem);
        }
      })
      console.log(self.results);
    })
    .catch(function(err) {
      console.error(err);
    });
  }
  this.chooseFood = function (result) {
    this.chosen = result;
    $state.go('home')
  }
  this.searchHistory = function (postcode) {
    this.postcode = postcode;
    this.getFood();
    $state.go('food')
  }
}
