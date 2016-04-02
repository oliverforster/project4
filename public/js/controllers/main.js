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
}
