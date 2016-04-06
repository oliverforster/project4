angular.module('testApp')
  .controller('UserController', UserController);

UserController.$inject = ['User', '$state', 'tokenService'];
function UserController(User, $state, tokenService) {
  var self = this;
  self.tvHistory = [];
  self.foodHistory   = [];

  this.userPage = function () {
    this.currentUser = tokenService.getUser();
    User.get({id: self.currentUser._id}).$promise.then(function (user) {
      self.tvHistory = user.tvHistory;
      self.foodHistory = user.foodHistory;
    });
    $state.go('user')
  }


}
