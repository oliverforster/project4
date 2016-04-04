angular.module('testApp')
  .factory('User', User);

User.$inject = ['$resource', 'API'];
function User($resource, API) {
  return $resource(API + '/user/:id', {id: '@_id'}, {
    update: { method: "PUT"},
    login: {method: "POST", url: API + '/login'},
    register: {method: "POST", url: API + '/register'}
  });
}
