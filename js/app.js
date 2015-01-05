angular.module('mamram', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        controller: 'SearchCtrl',
        templateUrl: "views/homepage.html"
      })
      .when('/video/:id', {
        controller: 'VideoCtrl',
        templateUrl: 'views/video.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });