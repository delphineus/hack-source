angular.module('hackSource.tags', [])
.controller('TagsCtrl', function($scope, Data) {

  var initializeTags = function () {
    Data.getPopularTags()
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
    restrict: 'E',
    templateUrl: 'app/tags/tags.html',
    controller: 'TagsCtrl',
    replace: true
  };
});