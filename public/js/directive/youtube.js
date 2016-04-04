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


  // controller: function(scope) {
  //   scope.openFancybox = function (url) {
  //     $http.get(url).then(function(response) {
  //       if (response.status == 200) {
  //
  //         var template = angular.element(response.data);
  //         var compiledTemplate = $compile(template);
  //         compiledTemplate($scope);
  //
  //         $.fancybox.open({ content: template, type: 'html' });
  //         }
  //       });
  //     }
  //   }
