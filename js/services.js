angular.module('mamram')

  .service('Youtube', function($http, $q) {
    function convertVideo(entry) {
      return {
        title: entry.title.$t,
        content: entry.content.$t,
        published: entry.published.$t,
        views: entry.yt$statistics.viewCount,
        id: entry.id.$t.split('/').pop().split(":").pop()
      };
    };

    this.searchVideos = function(keyword) {
      var deferred = $q.defer();

      var query = "q=" + keyword + "&alt=json";
      $http.get('https://gdata.youtube.com/feeds/api/videos?' + query)
        .success(function(data) {
          var videos = [];
          angular.forEach(data.feed.entry, function(entry) {
            videos.push(convertVideo(entry))
          });
          deferred.resolve(videos);
        });

      return deferred.promise;
    };

    this.getVideo = function(id) {
      var deferred = $q.defer();

      $http.get('https://gdata.youtube.com/feeds/api/videos/' + id + '?v=2&alt=json')
        .success(function(data) {
          deferred.resolve(convertVideo(data.entry));
        });
      return deferred.promise;
    };
  });