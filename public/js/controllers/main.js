angular.module('testApp')
  .controller('MainController', MainController);

MainController.$inject = ['$http', 'tokenService', '$auth', 'User', '$state', 'API_URL'];
function MainController($http, tokenService, $auth, User, $state, API_URL) {
  var self = this;

  self.all = []
  this.request = {};
  self.results = [];
  this.video = null;
  this.chosen = null;

  self.newRequest = function () {
    $http({
      method: "POST",
      url: API_URL + "/api/tastekid",
      data: {request: this.request, user: this.currentUser}
    })
    .then(function(response) {
      self.results = [];
      self.request = {};
      console.log(response.data);
      response.data.forEach(function(dataItem){
        self.results.push(dataItem);
      })
    })
    .catch(function(err) {
      console.error(err);
    });
  }

  this.isLoggedIn = function() {
    return !!tokenService.getToken();
  }

  this.currentUser = tokenService.getUser();

  this.authenticate = function(provider) {
    $auth.authenticate(provider)
      .then(function() {
        self.currentUser = tokenService.getUser();
        console.log(self.currentUser);
      });
  }

  this.logout = function() {
    tokenService.removeToken();
    this.currentUser = null;
  }

  this.showTrailer = function (result) {
    this.video = true;
    console.log(result.yID);
    this.trailer = result.yID;
  }
  this.chooseTv = function (result) {
    this.chosen = result;
    $state.go('food')

  }

  this.searchHistory = function (tv) {
    var split = tv.split(", ")
    this.request = {first: split[0], second: split[1]}
    this.newRequest();
    $state.go('television')
  }


  return this;
}
