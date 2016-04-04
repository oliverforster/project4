angular.module('testApp', ['satellizer', 'angular-jwt', 'ui.router'])
.constant('API_URL', 'http://localhost:3000')
.config(Router)
.config(oauthConfig)

oauthConfig.$inject = ['API_URL', '$authProvider', 'FACEBOOK_API_KEY']
function oauthConfig(API_URL, $authProvider, FACEBOOK_API_KEY) {
$authProvider.facebook({
  url: API_URL + '/auth/facebook',
  clientId: FACEBOOK_API_KEY
});

$authProvider.tokenPrefix = null;
}

Router.$inject = ['$stateProvider', '$urlRouterProvider'];
function Router($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/views/index.ejs'
    })
    .state('television', {
      url: '/television',
      templateUrl: '/views/television.html'
    })
    .state('food', {
      url: '/food',
      templateUrl: '/views/food.html'
    })
    .state('user', {
      url: '/profile',
      templateUrl: '/views/user.html'
    })

  $urlRouterProvider.otherwise('/');
}
