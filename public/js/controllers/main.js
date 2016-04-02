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
    .get("https://www.tastekid.com/api/similar?q=" + this.requestName + '&verbose=1&k=' + TASTEKID_API_KEY)
    .then(function(res) {
      self.all = res.data.Similar.Results;
      console.log(self.all);
    })
    .catch(function(err) {
      console.error(err);
    });
  }
}
