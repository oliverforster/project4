angular.module('testApp', ['satellizer', 'angular-jwt', 'ui.router', 'ngResource', 'angular.filter'])
.config(Router)
.config(oauthConfig)

oauthConfig.$inject = ['$authProvider', 'FACEBOOK_API_KEY']
function oauthConfig($authProvider, FACEBOOK_API_KEY) {
  $authProvider.facebook({
    url: '/auth/facebook',
    clientId: FACEBOOK_API_KEY,
    redirectUri: window.location.origin + '/'
  });

  $authProvider.tokenPrefix = null;
}

Router.$inject = ['$stateProvider', '$urlRouterProvider'];
function Router($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/views/home.html'
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
