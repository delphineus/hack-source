angular.module('hackSource.cardList', [])
.controller('cardListCtrl', function($scope, Data) {

  $scope.search = {
    category: '',
    tag: ''
  };

  // set the default sort type
  $scope.sortType = 'createdAt';
  // set the default sort order
  $scope.sortReverse = false;

  // Sort functionality
  $scope.sortBy = function(sortParam) {
    $scope.sortType = sortParam;
    $scope.sortReverse = !$scope.sortReverse;
  };

  $scope.setSearchCat = function(category) {
    $scope.search.category = category;
  };

  $scope.setSearchTag = function(tag) {
    $scope.search.tag = tag.title;
  };

})
.directive('myCardList', function() {
  return {
    restrict: 'E',
    templateUrl: 'app/cardList/cardList.html'
  };
});