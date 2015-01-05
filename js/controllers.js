angular.module('mamram')

.controller('SearchCtrl', function($scope, Youtube) {
  $scope.videos = [];

  $scope.search = function() {
    $scope.isLoading = true;

    Youtube.searchVideos($scope.keyword).then(function(data) {
      $scope.videos = data;
      $scope.isLoading = false;
    });
  };
})

.controller('VideoCtrl', function($scope, $routeParams, Youtube) {
  $scope.isLoading = true;
  Youtube.getVideo($routeParams.id).then(function(data) {
    $scope.video = data;
    $scope.isLoading = false;
  });
});