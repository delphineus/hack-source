angular.module('hackSource.cardList', [])
.controller('cardListCtrl', function($scope, Data) {

  // set the default sort type
  $scope.sortType = 'createdAt';
  // set the default sort order
  $scope.sortReverse = false;

  // Sort functionality
  $scope.sortBy = function(sortParam) {
    $scope.sortType = sortParam;
    $scope.sortReverse = !$scope.sortReverse;
  };

})
.directive('myCardList', function() {
  return {
    restrict: 'E',
    templateUrl: 'app/cardList/cardList.html'
  };
});