angular.module('testApp', ['satellizer', 'angular-jwt'])
.constant('API_URL', 'http://localhost:3000')
.config(oauthConfig);

oauthConfig.$inject = ['API_URL', '$authProvider', 'FACEBOOK_API_KEY']
function oauthConfig(API_URL, $authProvider, FACEBOOK_API_KEY) {
$authProvider.facebook({
  url: API_URL + '/auth/facebook',
  clientId: FACEBOOK_API_KEY
});

$authProvider.tokenPrefix = null;
}
