angular.module('hackSource.tags', [])
.factory('Tags', function($http) {

  var getAllTags = function () {
    return $http({
      method: 'GET',
      url: '/api/tags'
    })
    .then(function (resp) {
      return resp.data;
    });
  };

  return {
    getAllTags: getAllTags
  };

})
.controller('TagsCtrl', function($scope, Tags) {

  var initializeTags = function () {
    Tags.getAllTags()
      .then(function (tags) {
        $scope.taglist = tags;
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  initializeTags();

})
.directive('tagList', function() {
  return {
    // restrict: 'E',
    templateUrl: 'app/tags/tags.html',
    controller: 'TagsCtrl',
    replace: true
  };
});