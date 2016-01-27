angular.module('yelpin.postList', [])

.controller('postListController', ['$scope', '$http', 'ViewPost', 'appFactory','$state','sharedPropertyService', function($scope, $http, ViewPost, appFactory, $state, sharedPropertyService) {
  $scope.fetchedPosts;

  $scope.fetchPost = function() {
    return $http.get('/postList').then(function(res) {
      $scope.fetchedPosts = res.data;
    });
  };

  //Made this function for future use
  $scope.viewPost = function(postData) {
    ViewPost.set(postData);
  };

  $scope.signOut = function() {
    $scope.username = null;
    appFactory.signOut();
  };

  sharedPropertyService.checkAuth();
  $scope.fetchPost();

}]);
