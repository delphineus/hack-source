angular.module('hackSource.categoryLinks', [])
.factory('Cats', function($http) {

  var getAllCats = function () {
    return $http({
      method: 'GET',
      url: '/api/categories'
    })
    .then(function (resp) {
      return resp.data;
    });
  };

  return {
    getAllCats: getAllCats
  };

})
.controller('CatLinksCtrl', function($scope, Cats) {

  var initializeCats = function () {
    Cats.getAllCats()
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
    // restrict: 'E',
    templateUrl: 'app/categoryLinks/categoryLinks.html',
    controller: 'CatLinksCtrl',
    replace: true
  };
});