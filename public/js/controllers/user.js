angular.module('testApp')
  .controller('UserController', UserController);

UserController.$inject = ['User', '$state', 'tokenService'];
function UserController(User, $state, tokenService) {
  var self = this;
  self.searchHistory = [];
  this.currentUser = tokenService.getUser();

  this.userPage = function () {
    User.get({id: self.currentUser._id}).$promise.then(function (user) {
      self.searchHistory = user.searchHistory;
    });
    $state.go('user')
  }


}
