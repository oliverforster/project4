angular.module('testApp')
  .factory('User', User);

User.$inject = ['$resource'];
function User($resource) {
  return $resource('/users/:id', {id: '@_id'}, {
    update: { method: "PUT"}
  });
}
