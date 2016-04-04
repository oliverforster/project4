angular.module('testApp')
  .factory('User', User);

User.$inject = ['$resource'];
function User($resource) {
  return $resource("http://localhost:3000" + '/users/:id', {id: '@_id'}, {
    update: { method: "PUT"}
  });
}
