angular.module('testApp')
  .controller('MainController', MainController);

MainController.$inject = ['$http', 'TASTEKID_API_KEY'];
function MainController($http, TASTEKID_API_KEY) {
  var self = this;

  self.all = []
  this.request = {};
  this.requestName = this.request.name;

  self.newRequest = function () {
    this.requestName = this.request.name;
    this.requestName.replace(/ /g, "+")
    $http
    .get("http://localhost:3000/api/tastekid")
    .then(function() {
      console.log("PING!!!");
    })
    .catch(function(err) {
      console.error(err);
    });
  }
}
