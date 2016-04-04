angular.module('testApp')
  .directive('youtube', Youtube);

Youtube.$inject = ['$sce'];

function Youtube($sce) {
    return {
      restrict: 'EA',
      scope: { code:'=' },
      replace: true,
      template: '<div class="embed-responsive embed-responsive-16by9"><iframe class="video" width="100%" height="100%" src="{{url}}" frameborder="0" allowfullscreen></iframe></div>',
      link: function (scope) {
          scope.$watch('code', function (newVal) {
             if (newVal) {
                 scope.url = $sce.trustAsResourceUrl("http://www.youtube.com/embed/" + newVal + "?autoplay=1");
             }
          });
      }
    };
  }
