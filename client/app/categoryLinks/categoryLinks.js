angular.module('hackSource.categoryLinks', [])
.controller('CatLinksCtrl', function($scope, Data) {

  var initializeCats = function () {
    Data.getAllCategories()
      .then(function (cats) {
        $scope.categories = cats;
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  initializeCats();

})
.directive('catlinks', function() {
  return {
    restrict: 'E',
    templateUrl: 'app/categoryLinks/categoryLinks.html',
    controller: 'CatLinksCtrl',
    replace: true
  };
});