angular.module('testApp', [])
.config(oauthConfig);

oauthConfig.$inject = ['API_URL', '$authProvider', 'FACEBOOK_API_KEY']
function oauthConfig(API_URL, $authProvider, FACEBOOK_API_KEY, GITHUB_API_KEY) {
$authProvider.facebook({
  url: API_URL + '/auth/facebook',
  clientId: FACEBOOK_API_KEY
});

$authProvider.github({
  url: API_URL + '/auth/github',
  clientId: GITHUB_API_KEY
});

$authProvider.tokenPrefix = null;
}
