angular.module('testApp')
  .controller('MainController', MainController);

MainController.$inject = ['$http', 'TASTEKID_API_KEY', 'tokenService', '$auth'];
function MainController($http, TASTEKID_API_KEY, tokenService, $auth) {
  var self = this;

  self.all = []
  this.request = {};

  self.newRequest = function () {
    $http({
      method: "POST",
      url: "http://localhost:3000/api/tastekid",
      data: this.request
    })
    .then(function(response) {
      console.log(response);
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
      });
  }

  this.logout = function() {
    tokenService.removeToken();
    this.currentUser = null;
  }
}