angular.module('testApp')
  .controller('UserController', UserController);

  UserController.$inject = ['User', '$state'];
  function UserController(User, $state) {
    var self = this;
    self.searchHistory = [];

    this.userPage = function () {
      User.get({id: self.currentUser._id}).$promise.then(function (user) {
        self.searchHistory = user.searchHistory;
      });
      $state.go('user')
    }


  }
