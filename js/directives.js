angular.module('mamram').
  directive('youtubePlayer', function() {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        videoId: '='
      },
      controller: function($scope, $sce) {
        $scope.videoUrl = "http://www.youtube.com/embed/" + $scope.videoId;
      },
      template: '<iframe style="margin-top: 20px" ng-src="{{videoUrl}}" frameborder="0" allowfullscreen width="100%" height="400px"></iframe>'
    }
  });
