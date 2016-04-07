angular.module('testApp')
  .controller('UserController', UserController);

UserController.$inject = ['User', '$state', 'tokenService'];
function UserController(User, $state, tokenService) {
  var self = this;
  self.tvHistory = [];
  self.foodHistory   = [];

  this.userPage = function () {
    this.currentUser = tokenService.getUser();
    if(!!this.currentUser) {
    User.get({id: self.currentUser._id}).$promise.then(function (user) {
      user.tvHistory.forEach(function (tv) {
        pushIfNew(self.tvHistory, tv)
      })
      user.foodHistory.forEach(function (food) {
        pushIfNew(self.foodHistory, food)
      })
    });
    $state.go('user')
  }
  }
  this.userPage();

  function pushIfNew(array, obj) {
  for (var i = 0; i < array.length; i++) {
    if (array[i].toString() === obj) { // modify whatever property you need
      return;
    }
  }
  array.push(obj);
  }


}
